import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormComponent from './Components/Form';
import TableComponent from './Components/Display';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<FormComponent />} />
        <Route path="/table" element={<TableComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
