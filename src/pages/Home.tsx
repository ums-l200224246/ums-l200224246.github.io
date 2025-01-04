import React from 'react';
import Introduction from '../components/Introduction';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import LatestPosts from '../components/LatestPosts';
import Projects from '../components/Projects';
import { SAMPLE_POSTS } from '../data/posts';

export default function Home() {
  const { repos, loading } = useGitHubRepos('github', 1, 3);
  const latestPosts = SAMPLE_POSTS.slice(0, 3);
  
  return (
    <>
      <Introduction />
      <Projects repos={repos} loading={loading} showAll={false} />
      <LatestPosts posts={latestPosts} />
    </>
  );
}