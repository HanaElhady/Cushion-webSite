import React, { useState } from 'react';
import './Error.css';
import error from '../../img/error.svg';
import { useNavigate } from 'react-router-dom';

export default function Error() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px',
        textAlign: 'center', // Center text alignment for the whole container
      }}
    >
      <img
        src={error}
        alt="Page not found icon"
        style={{
          width: '260px',
          height: '250px',
          marginBottom: '5px', // Add spacing below the image
        }}
      />
      <h1 style={{ fontSize: '24px', marginBottom: '5px' }}>Page Not Found</h1>
      <div
        style={{
          width: '250px',
          marginBottom: '5px', // Add spacing below the text
        }}
      >
        <p style={{ fontSize: '20px' }}>
          The page you are looking for doesn't exist or has been moved.
        </p>
      </div>
      <button
        onClick={() => navigate('/')}
        onMouseEnter={() => setIsHovered(true)}  
        onMouseLeave={() => setIsHovered(false)} 
        style={{
          borderRadius: '50px',
          border: '2px solid #b08ead',
          backgroundColor: isHovered ? '#b08ead' : 'white',
          color: isHovered ? 'white' : '#b08ead',
          padding: '10px 20px',
          cursor: 'pointer',
          textAlign: 'center',
        }}
      >
        Back Home
      </button>
    </div>
  );
}

