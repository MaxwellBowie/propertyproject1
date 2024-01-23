import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
  

class NavBar extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                       
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="/">QA Property</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/properties">Property</Nav.Link>
                                    <Nav.Link href="/sellers">Sellers</Nav.Link>
                                    <Nav.Link href="/buyers">Buyers</Nav.Link>
                                    
                                    </Nav>
                                    
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                               
                            
                       
                    </div>
                </div>
            </div>
        )  
    }
}

export default NavBar;