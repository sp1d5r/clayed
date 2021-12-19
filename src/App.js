import './App.css';
import NavBar from "./components/NavBar";

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from "./components/Home/HomePage";
import React from "react";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage/>


      <BrowserRouter>
          <Routes>
              <Route path="/" element={HomePage}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
