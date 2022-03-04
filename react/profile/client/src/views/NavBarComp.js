/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from "react";
import {HashLink as Link} from "react-router-hash-link";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import navbarImg from "../whiteStag.jpeg"
import "../style.css";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

export default class NavBarComp extends Component {
    render() {
        return(
        <div>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand smooth href="#">
                <img
                    src={navbarImg}
                    width="40"
                    height="40"
                    />
                    ERH
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link smooth href="#about">About</Nav.Link>
                    <Nav.Link smooth href="#contact">Contact</Nav.Link>
                    <Nav.Link smooth href="#footer">Footer</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                </Navbar.Collapse>
        </Navbar>
            </div>
        )
    }
}
