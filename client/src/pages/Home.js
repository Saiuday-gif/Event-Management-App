import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // సెర్చ్ టర్మ్ కోసం స్టేట్

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/events');
        setEvents(res.data);
      } catch (err) { console.error(err); }
    };
    fetchEvents();
  }, []);

  // Searrch term
  const filteredEvents = events.filter(event => 
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Available Events</h2>
      
      {/* Add search bar */}
      <input 
        type="text" 
        placeholder="Search events by name..." 
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ 
          padding: '10px', 
          width: '300px', 
          borderRadius: '5px', 
          border: '1px solid #ccc',
          marginBottom: '20px'
        }} 
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <div key={event._id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', width: '280px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#2980b9' }}>{event.name}</h3>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
            </div>
          ))
        ) : (
          <p>No events found!</p>
        )}
      </div>
    </div>
  );
};

export default Home;