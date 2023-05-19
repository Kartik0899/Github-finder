import React from 'react';
import UserDetail from './components/Details/UserDetail';
import Navbar from './components/Navbar/Navbar';
import UserSearch from './components/Search/UserSearch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/Details/About';


function App() {

  return (
    <>
      <div className='flex flex-col'>
        <Navbar />
        <Router>
          <main className='mx-auto w-full'>
            <Routes>
              <Route exact path="/" element={<UserSearch />} />
              <Route path="/user/:username" element={<UserDetail />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </Router>
      </div>
    </>
  );
}

export default App;
