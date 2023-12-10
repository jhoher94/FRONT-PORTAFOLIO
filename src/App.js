import * as React from 'react';
import './App.css';
import Appbar from './components/Appbar';
import Programador from './components/Programador';
import Proyecto from './components/Proyecto';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Appbar/>} />
        <Route path="/Proyecto" element={<Proyecto />} />
        <Route path="/Programador" element={ <Programador/>} />
      </Routes>
    </>
  );
}

export default App;
