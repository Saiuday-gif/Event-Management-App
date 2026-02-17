import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEvent = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // నీ బ్యాకెండ్ అడ్రస్ కి డేటా పంపుతుంది
            await axios.post('http://localhost:5000/api/events', { name, category, location, date });
            alert("Event Created Successfully!");
            navigate('/'); // హోమ్ పేజీకి వెళ్తుంది
        } catch (error) {
            alert("Failed to create event. Make sure server is running.");
        }
    };

    return (
        <div style={{ padding: '50px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ padding: '30px', border: '1px solid #ddd', borderRadius: '10px', width: '400px' }}>
                <h2>Create New Event</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <input type="text" placeholder="Event Name" onChange={(e) => setName(e.target.value)} required style={{ padding: '10px' }} />
                    <input type="text" placeholder="Category" onChange={(e) => setCategory(e.target.value)} required style={{ padding: '10px' }} />
                    <input type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)} required style={{ padding: '10px' }} />
                    <input type="date" onChange={(e) => setDate(e.target.value)} required style={{ padding: '10px' }} />
                    <button type="submit" style={{ padding: '10px', backgroundColor: '#27ae60', color: 'white', border: 'none', cursor: 'pointer' }}>Save Event</button>
                </form>
            </div>
        </div>
    );
};

export default AddEvent;