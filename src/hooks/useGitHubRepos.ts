import { useState, useEffect } from 'react';
import { Repository } from '../types';

export function useGitHubRepos(username: string = 'ums-l200224246', page = 1, perPage = 6) {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);

        // Use your GitHub username or a custom API URL here
        const response = await fetch(
          `https://api.github.com/users/ums-l200224246/repos?page=${page}&per_page=${perPage}&sort=updated&direction=desc`
        );
        const data = await response.json();
        setRepos(data);

        // Fetch total repository count
        const countResponse = await fetch(`https://api.github.com/users/ums-l200224246`);
        const userData = await countResponse.json();
        setTotalCount(userData.public_repos);
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
