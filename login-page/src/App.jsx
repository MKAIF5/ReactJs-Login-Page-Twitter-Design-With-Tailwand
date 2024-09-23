import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <>
      <div className="bg-white p-16 w-96 mx-auto my-40 rounded-md">
        <div className='text-center text-3xl'>
          <FontAwesomeIcon icon={faTwitter} style={{ color: '#33beff' }} />
        </div>
        <br />
        <div>
          <h1 className='text-2xl font-bold text-center'>Sign In To Twitter</h1>
        </div>
      </div>
    </>
  );
}

export default App;
