import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Layout/Navbar/Navbar';
import Carousel from './Components/Layout/Carousel/Carousel';
import './App.css';
import Recipies from './Container/Recipies/Recipies';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RecipeContent from './Container/RecipeContent/RecipeContent';
import Footer from './Components/Layout/Footer/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/recipe">
              <RecipeContent />
          </Route>
          <Route path="/">
              <Carousel />
              <Recipies />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
