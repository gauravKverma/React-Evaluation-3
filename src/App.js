import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {Routes,Route} from "react-router-dom";
import RequiredAuth from "./hoc/RequiredAuth";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      {
        <Routes>
          <Route path="/" element={<RequiredAuth><Home/></RequiredAuth>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        
        
      }
    </div>
  );
}

export default App;
