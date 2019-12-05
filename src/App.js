import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

// Components
import NavbarWeb from './components/NavbarWeb/NavbarWeb';
import Buscador from './components/Buscador/Buscador';
import 'bootstrap/dist/css/bootstrap.min.css';
import Historial from './components/Historial/Historial';


function App() {
  return (
            <div className="App">
              <Router>
                <NavbarWeb/>      
                <Route path="/Buscador" component={Buscador} />
                <Route path="/Historial" component={Historial} />
              </Router>
            </div>
  );
}

export default App;
