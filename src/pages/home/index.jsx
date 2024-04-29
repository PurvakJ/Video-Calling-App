import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import the new CSS file

const HomePage = () => {
    const [value, setValue] = useState('');

    const navigate = useNavigate();

    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`);
    }, [navigate, value]);

    return (
        <div className="homepage-container">
            <div className="homepage-content">
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    className="homepage-input"
                    placeholder="Enter Room Code"
                />
                <button className="homepage-button" onClick={handleJoinRoom}>Join</button>
            </div>
        </div>
    );
};

export default HomePage;
