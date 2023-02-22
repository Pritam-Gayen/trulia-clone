import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavbarTop.css"
import { Sidebar } from "../Sidebar/Sidebar";
import { AnimateT } from "./AnimateT";
import { AnimateR } from "./AnimateR";


const NavbarTop = () =>{

    return(
        <>
            <Navbar sticky="top" bg="light" expand="lg" className="navbar-top">
                <Container >
                    <Navbar.Brand href="#home" id="company_name" ><AnimateT/><AnimateR/>ulia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav className="me-auto dropdown">
                            <Nav.Link href="#home" className="navbar-button">Buy</Nav.Link>
                            <Nav className="me-auto dropdown-content">
                                <Nav.Link href="#home" className="navbar-dropdown">Homes for Sale</Nav.Link>
                                <Nav.Link href="#home" className="navbar-dropdown">Open Houses</Nav.Link>
                                <Nav.Link href="#home" className="navbar-dropdown">New Homes</Nav.Link>
                                <Nav.Link href="#home" className="navbar-dropdown">Recently Sold</Nav.Link>
                            </Nav>
                        </Nav>
                        
                        <Nav className="me-auto dropdown">
                            <Nav.Link href="#link" className="navbar-button">Rent</Nav.Link>
                            <Nav className="me-auto dropdown-content">
                                <Nav.Link href="#home" className="navbar-dropdown">All Rentals</Nav.Link>
                                <Nav.Link href="#home" className="navbar-dropdown">Apartments for Rent</Nav.Link>
                                <Nav.Link href="#home" className="navbar-dropdown">Houses for Rent</Nav.Link>
                                <Nav.Link href="#home" className="navbar-dropdown">Post A Rental Listing</Nav.Link>
                            </Nav>
                        </Nav>
                        <Nav className="me-auto dropdown">
                            <Nav.Link href="#link" className="navbar-button">Mortgage</Nav.Link>
                            <Nav className="me-auto dropdown-content">
                                <Nav.Link href="#home" className="navbar-dropdown">Mortgage Overview</Nav.Link>
                                <Nav.Link href="#home" className="navbar-dropdown">Get Pre-Qualified</Nav.Link>
                                <Nav.Link href="#home" className="navbar-dropdown">Mortgage Rates</Nav.Link>
                                <Nav.Link href="#home" className="navbar-dropdown">Refinance Rates</Nav.Link>
                                <Nav.Link href="#home" className="navbar-dropdown">Mortgage Calculator</Nav.Link>
                                <Nav.Link href="#home" className="navbar-dropdown">Afordability Calculator</Nav.Link>
                                <Nav.Link href="#home" className="navbar-dropdown">Refinance Calculator</Nav.Link>
                            </Nav>
                        </Nav>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="#link" className="navbar-button" style={{marginLeft:'5px'}}>Saved Homes</Nav.Link>
                        <Nav.Link href="#link" className="navbar-button" style={{marginLeft:'5px'}}>Saved Searches</Nav.Link>
                        <Nav.Link href="#link" id="signup-login" style={{marginLeft:'5px'}}>Sign up or Log in</Nav.Link>
                        <Sidebar/>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
          
        </>
    )
}

export {NavbarTop}