import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import Footer from './Components/Layout/Footer/footer';
import Recify from './Container/Recify/Recify';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Recify />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
