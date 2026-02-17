import React from 'react';
import { Link } from 'react-router-dom'; 

const Dashboard = () => {
    return (
        <div style={{ padding: '40px', backgroundColor: '#f9f9f9', minHeight: '80vh' }}>
            <h1 style={{ color: '#2c3e50' }}>My Dashboard</h1>
            <p>Welcome to your dashboard. Here you can manage your events.</p>
            
            <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', background: 'white' }}>
                <h3>You have not added any events yet.</h3>
                {/* Here Link is used to navigate to the Add Event page */}
                <Link to="/add-event" style={{ textDecoration: 'none' }}>
                    <button style={{ padding: '10px 20px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
                        + Create New Event
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;