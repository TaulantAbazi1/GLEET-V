import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component{

    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>

                <NavLink className="d-inline p-2 bg-dark text-white" to="/makina">
                    Makinat
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/vendparkingjet">
                    Vendparkingjet
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/paisjet">
                    Paisjet
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/profili">
                    Profili
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/antaresimi">
                    Antaresimi
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/gjuha">
                    Gjuha
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/users">
                    Users
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/aboutus">
                    About Us
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/tos">
                    Terms of Service
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/contactform">
                    Contact form
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/feedback">
                   Feedback
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/destinacionet">
                   Destinacionet
                </NavLink>
                
                <NavLink className="d-inline p-2 bg-dark text-white" to="/navigation2">
                    Click for more
                </NavLink>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    
    }
}