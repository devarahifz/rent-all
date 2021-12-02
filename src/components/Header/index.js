import React from 'react'
import { Container, Navbar, Form, Button, FormControl, NavDropdown } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./header.css"

const Header = () => {
    return (
        <>

        {/* Navbar */}
        <Navbar className="bg-home" style={{fontSize:"14px"}}>
            <Container>
                {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}
                <Navbar.Text><a href="/" className="header help">Download App</a></Navbar.Text>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text><a href="/" className="header help" style={{}}>Tentang RentAll</a></Navbar.Text>
                <Navbar.Text><a href="/" className="header help" style={{marginLeft: "20px"}}>Mulai jadi Renter</a></Navbar.Text>
                <Navbar.Text><a href="/" className="header help" style={{marginLeft: "20px"}}>Bantuan</a></Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        <nav class="navbar navbar-light bg-home">
            <div class="container">
                <div class="row">
                    <span class="col rentall navbar-brand mb-0 h1"><a href="/" style={{color:"white"}}>RentAll</a></span>
                    {/* <span class="col" style={{fontSize:"45px", marginTop: "6px"}}>|</span>
                    <span class="col" style={{fontSize: "36px", marginTop: "12px"}}>Login</span> */}
                    <div class="col" style={{marginTop: "auto", marginBottom: "auto"}}>
                        <NavDropdown title="Kategori" id="navbarDropdown" style={{color:"white"}}>
                            <NavDropdown.Item href="#action3">Audio</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Akomodasi</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Logistik</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                    <div class="col" style={{marginTop: "auto", marginBottom: "auto"}}>
                        <Form className="d-flex">
                            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                            <Button variant="outline-success" className="buttonSearch">Search</Button>
                        </Form>
                    </div>
                </div>
                <div class="row">
                    <span class="col" style={{fontSize: "25px", right: "83.68%"}}><a href="/register" class="help" style={{color: "white", fontWeight: "bold"}}><i class="bi bi-cart-fill"></i></a></span>
                    <span class="col" style={{fontSize: "25px"}}><a href="/login" class="help" style={{color: "white", fontWeight: "bold"}}><i class="bi bi-bell-fill"></i></a></span>
                    <span class="col" style={{fontSize: "25px"}}><a href="/profile" class="help" style={{color: "white", fontWeight: "bold"}}><i class="bi bi-person-circle"></i></a></span>
                    <span class="col" style={{fontSize: "25px"}}><a href="/profile" class="help " style={{color: "white", fontWeight: "bold"}}>User</a></span>
                </div>
            </div>
        </nav>
        
        </>
    )
}

export default Header
