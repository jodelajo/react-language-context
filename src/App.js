import React, {useContext} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import AllPlants from './pages/allPlants/AllPlants';
import  {LanguageContext} from '../src/context/LanguageContext'

function App() {
const  { activeLanguage } = useContext(LanguageContext);

  return (

    <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/all-plants">
            <AllPlants />
          </Route>
        </Switch>
    </Router>


  );
}

export default App;
