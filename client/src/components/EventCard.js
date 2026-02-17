import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const EventCard = ({ event }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = async () => {
        // We can add API call here to register the user for the event
        alert(`${event.name} కి రిజిస్టర్ అయ్యారు!`);
    };

    return (
        <div className="border border-gray-200 p-5 rounded-lg shadow-lg bg-white hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{event.name}</h3>
            
            <p className="text-gray-600 mb-1">
                <span className="font-semibold">📍 Location:</span> {event.location}
            </p>
            <p className="text-gray-600 mb-3">
                <span className="font-semibold">📅 Date:</span> {new Date(event.date).toLocaleDateString()}
            </p>
            
            <p className="text-sm text-gray-700 mb-4 line-clamp-3">{event.description}</p>
            
            <div className="flex justify-between items-center mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {event.category}
                </span>
                <span className="text-sm font-medium text-gray-500">
                    Seats: {event.capacity}
                </span>
            </div>
            
            {/* Snippet B Logic: User Login Check */}
            <div className="mt-auto">
                {user ? (
                    event.capacity > 0 ? (
                        <button 
                            onClick={handleRegister} 
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">
                            Register Now
                        </button>
                    ) : (
                        <p className="text-red-500 font-bold text-center py-2 bg-red-50 rounded">Sold Out</p>
                    )
                ) : (
                    <button 
                        onClick={() => navigate('/login')} 
                        className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition">
                        Login to Register
                    </button>
                )}
            </div>
        </div>
    );
};

export default EventCard;