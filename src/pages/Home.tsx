import React from 'react';
import Introduction from '../components/Introduction';
import Skills from '../components/Skills';
import Education from '../components/Education';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import LatestPosts from '../components/LatestPosts';
import Projects from '../components/Projects';
import { SAMPLE_POSTS } from '../data/posts';

export default function Home() {
  const { repos, loading } = useGitHubRepos('ums-l200224246', 1, 3);
  const latestPosts = SAMPLE_POSTS.slice(0, 3);

  return (
    <>
      <Introduction />
      <Skills />
      <Projects repos={repos} loading={loading} showAll={false} />
      <LatestPosts posts={latestPosts} />
      <Education />
    </>
  );
}