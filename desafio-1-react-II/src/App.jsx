import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Contacto from './Contacto';
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
