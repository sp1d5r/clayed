import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from "./components/Home/HomePage";
import React from "react";
import StrainsPage from "./components/Strains/StrainsPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<HomePage/>}/>
              <Route exact path='/strains' element={<StrainsPage/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
