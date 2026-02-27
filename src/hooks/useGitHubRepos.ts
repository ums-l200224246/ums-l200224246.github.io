import { useState, useEffect } from 'react';
import { Repository } from '../types';

export function useGitHubRepos(username: string = 'ums-l200224246', page = 1, perPage = 6) {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchRepos = async () => {
      const cacheKey = `gh_repos_${username}_${page}_${perPage}`;
      const cacheCountKey = `gh_count_${username}`;
      
      // Check sessionStorage cache
      try {
        const cached = sessionStorage.getItem(cacheKey);
        const cachedCount = sessionStorage.getItem(cacheCountKey);
        if (cached && cachedCount) {
          setRepos(JSON.parse(cached));
          setTotalCount(JSON.parse(cachedCount));
          setLoading(false);
          return;
        }
      } catch {}

      try {
        setLoading(true);

        const response = await fetch(
          `https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}&sort=updated&direction=desc`
        );
        
        if (!response.ok) {
          if (response.status === 403) {
            throw new Error('GitHub API rate limit exceeded. Please try again later.');
          }
          throw new Error(`Failed to fetch repositories (${response.status})`);
        }
        
        const data = await response.json();
        setRepos(data);

        const countResponse = await fetch(`https://api.github.com/users/${username}`);
        if (countResponse.ok) {
          const userData = await countResponse.json();
          setTotalCount(userData.public_repos);
          
          // Cache the results
          try {
            sessionStorage.setItem(cacheKey, JSON.stringify(data));
            sessionStorage.setItem(cacheCountKey, JSON.stringify(userData.public_repos));
          } catch {}
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username, page, perPage]);

  return { repos, loading, error, totalCount };
}
