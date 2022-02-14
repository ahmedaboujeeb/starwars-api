import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Character from './Character'


function App() {
  return (
    <div>
      <Router>
        <Container>
          <Routes>
          <Route path="/" element={<Character />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
