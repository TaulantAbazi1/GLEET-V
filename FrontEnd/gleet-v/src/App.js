import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Contact from './components/pages/Contact';
import Cards from './components/Cards';
import FormC from './components/FormC';
import FormCustomer from './components/FormCustomer';
import SponsorCards from './components/SponsorCards';
import Crudat from './components/pages/Crudat';
import ServicesCards from './components/ServicesCards';
import AntaresimiZgj from './components/AntaresimiZgj';
import NiveliAntaresimit from './components/pages/NiveliAntaresimi';
import Rezervimi from './components/Rezervimi';
import Navigation2 from './Navigation2';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/contact' component={Contact} />
          <Route path='/cards' component={Cards} />
          <Route path='/contactforms' component={FormC} />
          <Route path='/formcustomer' component={FormCustomer} />
          <Route path='/sponsorcards' component={SponsorCards} />
          <Route path='/crudat' component={Crudat} />
          <Route path='/servicescards' component={ServicesCards} />
          <Route path='/antaresimizgj' component={AntaresimiZgj} />
          <Route path='/niveliantaresimit' component={NiveliAntaresimit} />
          <Route path='/rezervimi' component={Rezervimi} />
          
        </Switch>
      </Router>
    </>
  );
}


export default App;