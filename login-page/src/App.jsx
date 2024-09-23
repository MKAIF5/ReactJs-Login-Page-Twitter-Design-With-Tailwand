import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <>
      <div className="bg-white p-7 w-96 mx-auto my-44 rounded-md">
        <div className='text-center text-3xl'> 
          <FontAwesomeIcon icon={faTwitter} style={{ color: '#33beff' }} />
        </div>
      </div>
    </>
  );
}

export default App;
