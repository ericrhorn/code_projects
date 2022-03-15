/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from "react";
import { Navbar, Nav } from "react-bootstrap";
import navbarImg from "../whiteStag.jpeg"
import "../style.css";


export default class NavBarComp extends Component {
    render() {
        return(
        <div>
        <Navbar className="nav-color" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand smooth href="#">
                {/* <img
                    src={navbarImg}
                    width="40"
                    height="40"
                    /> */}
                    ERH
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link smooth href="#about">About</Nav.Link>
                    <Nav.Link smooth href="#tech">Technologies</Nav.Link>
                    <Nav.Link smooth href="#projects">Projects</Nav.Link>
                    <Nav.Link smooth href="#contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
            </div>
        )
    }
}
