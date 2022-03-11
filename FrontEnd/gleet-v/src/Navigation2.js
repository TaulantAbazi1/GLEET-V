import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export default class Navigation extends Component{

    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                
               
                <NavLink className="d-inline p-2 bg-dark text-white" to="/sherbimet">
                    Sherbimet
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/investitoret">
                   Investitoret
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/mirmbajtja">
                   Mirmbajtja
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/returnt">
                   Return Time
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/custumersupport">
                   Custumer Support
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/fuelup">
                   Fuel Up
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/zyret">
                    Zyret
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/sponzori">
                    Sponzori
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/ratings">
                    Ratings
                </NavLink>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}