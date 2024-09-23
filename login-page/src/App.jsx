import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <>
      <div className="bg-white p-10 w-1/3 mx-auto my-28 rounded-md">
        <div className='text-center text-xl'>
          <FontAwesomeIcon icon={faTwitter} style={{ color: '#33beff' }} />
        </div>
        <br />
        <div>
          <h1 className='text-2xl font-bold text-center'>Sign In To Twitter</h1>
        </div>
        <br />
        <div
          className='p-1 border w-72 ml-10 border-gray-400 rounded-2xl
          flex justify-center items-center gap-1'>
          <img
            className='w-7'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRB4kg1jgnqD5fEaCSHKMoUdFeTBj9CH_opA&s" alt="" />
          <p className='text-base'>
            Sign In With Google
          </p>
        </div>
        <br />
        <div
          className='p-1 border w-72 ml-10  border-gray-400 rounded-2xl
          flex justify-center items-center gap-3'>
          <img
            className='w-7'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8q-q8tIe9uneV2Q5zoHeztF9m41_uSYjzA&s" alt="" />
          <p className='text-base'>
            Sign In With Apple
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
