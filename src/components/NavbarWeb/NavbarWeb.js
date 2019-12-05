import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';

import './NavbarWeb.css';

class NavbarWeb extends Component {
    state = {  }
    render() {
        return (<div>
                    <Navbar className="m-auto" collapseOnSelect expand="sm" bg="dark" variant="dark">
                        <Navbar.Brand className="font-weight-bold">Twitter App</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link to="/Buscador" href="#buscador">Buscador</Nav.Link>
                            <Nav.Link to="/Historial" href="#historial">Historial</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
        );
    }
}

export default NavbarWeb;