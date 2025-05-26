import React, { useEffect, useState } from 'react';

export default function Profile({ userId }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/profile/${userId}`)
      .then(res => res.json())
      .then(setProfile);
  }, [userId]);

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h2>My Profile</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
    </div>
  );
}
