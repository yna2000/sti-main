import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/events')
      .then(res => res.json())
      .then(setEvents);
  }, []);

  return (
    <div>
      <h2>STI Events</h2>
      <ul>
        {events.map(e => (
          <li key={e.id}>{e.title} - {e.date}</li>
        ))}
      </ul>
      <Link to="/profile">Go to Profile</Link>
    </div>
  );
}
