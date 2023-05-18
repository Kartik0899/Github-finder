
import React, { useState } from 'react';

import './App.css';
import UserContext from './components/context/UserContext';
import UserDetail from './components/Details/UserDetail';
import Navbar from './components/Navbar/Navbar';
import UserSearch from './components/Search/UserSearch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  const [user, setUser] = useState('hello world');

  return (
    <>
      {/* <UserContext.Provider value={[user, setUser]}> */}
      <div className='flex flex-col h-screen'>
        <Navbar />
        <Router>
          <main className='container mx-auto px-3 pb-12'>
            <Routes>
              <Route exact path="/" element={<UserSearch />} />
              <Route path="/user/:username" element={<UserDetail />} />
            </Routes>
            {/* <UserSearch /> */}
          </main>
        </Router>
      </div>
      {/* </UserContext.Provider> */}
    </>
  );
}

export default App;
