// src/GitHubProfile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GitHubProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Ganti 'username' dengan username GitHub Anda
    axios.get('https://api.github.com/users/ums-l200224246.github.io')
      .then(response => {
        setProfileData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading profile data.</p>;
  }

  return (
    <div className="profile">
      <h1>{profileData.name}</h1>
      <p>{profileData.bio}</p>
      <img src={profileData.avatar_url} alt="Avatar" width="150" />
      <p>Location: {profileData.location}</p>
      <p>Public Repos: {profileData.public_repos}</p>
      <a href={profileData.html_url} target="_blank" rel="noopener noreferrer">
        Visit GitHub Profile
      </a>
    </div>
  );
};

export default GitHubProfile;
