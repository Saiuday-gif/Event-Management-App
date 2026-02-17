import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // My backend is hosted on Render, so I need to use the full URL here
        const res = await axios.get('https://event-management-app-3-q3dh.onrender.com/api/events');
        setEvents(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEvents();
  }, []);

  // Search functionality 
  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container" style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Available Events</h1>
      
      <input
        type="text"
        placeholder="Search events by name..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '10px', width: '300px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc' }}
      />

      <div className="events-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {filteredEvents.map(event => (
          <div key={event._id} className="event-card" style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '10px', width: '250px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#0056b3' }}>{event.name}</h3>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Date:</strong> {event.date}</p>
            
            {/* View Details button is added*/}
            <button style={{ backgroundColor: '#28a745', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;