import React from 'react';

const EventDetails = () => {
    return (
        <div style={{ padding: '40px' }}>
            <h2>Event Details</h2>
            <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px' }}>
                <p><strong>Event Name:</strong> Sample Event</p>
                <p><strong>Details:</strong> This is a sample event description. Please login to book this event.</p>
                <button style={{ padding: '10px', backgroundColor: '#e67e22', color: 'white', border: 'none', cursor: 'pointer' }}>
                    Please Login to Book This Event
                </button>
            </div>
        </div>
    );
};

export default EventDetails;