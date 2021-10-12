import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './Navbar.css'

const goToTop = () => {
    window.scrollTo(0, 0)
 }  
<img className="Header-logo" src="/logo.png" alt="Logo" onClick={goToTop}/>
export default function NavbarTop() {
    return (
        <div>
        <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
            <Container>
            <img className="Header-logo" src="/logo.png" alt="Logo" onClick={goToTop}/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#research">Research</Nav.Link>
                    <Nav.Link href="#contactus">Contact Us</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}
