import React from 'react'
import { Container, Navbar, Form, Button, FormControl, Carousel, Row, Col, Card, NavDropdown } from 'react-bootstrap'
import placeholder from '../../assets/placeholder1.jpeg'
import './dashboard.css'

const Dashboard = () => {
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
                    <span class="col" style={{fontSize: "18px", right: "83.68%"}}><a href="/register" class="help" style={{color: "white", fontWeight: "bold"}}>Daftar</a></span>
                    <span class="col" style={{fontSize: "18px"}}><a href="/login" class="help" style={{color: "white", fontWeight: "bold"}}>Login</a></span>
                </div>
            </div>
        </nav>

        <br></br>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={placeholder}
                 alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={placeholder} alt="Second slide"/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={placeholder} alt="Third slide"/>
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
            
        <div class="Card">
            <Row xs={1} md={6} className="g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col style={{marginBottom: "100px"}}>
                        <Card>
                            <Card.Img variant="top" src={placeholder} />
                            <Card.Body>
                                <Card.Title>Nama Barang</Card.Title>
                                <Card.Text>Rp. 500.000</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    
        </>
    )
}

export default Dashboard