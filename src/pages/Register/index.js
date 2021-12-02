import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './register.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Register = () => {
    return (
        <>
        
        {/* Navbar */}
        <nav class="navbar navbar-light bg">
            <div class="container">
                <div class="row">
                    <span class="col rentall navbar-brand mb-0 h1" style={{marginLeft: "50px"}}><a href="/" class="help" style={{color:"white"}}>RentAll</a></span>
                    <span class="col" style={{color: "white", fontSize:"45px", marginTop: "6px"}}>|</span>
                    <span class="col" style={{color: "white", fontSize: "36px", marginTop: "12px"}}>Daftar</span>
                </div>
                <span style={{fontSize: "18px", right: "83.68%"}}><a href="#" class="help" style={{color: "white"}}>Butuh Bantuan</a></span>
            </div>
        </nav>

        {/* Register */}
        <div class="container" style={{marginTop: "50px"}}>
            <div class="row">
                <span class="col"></span>
                <div class="col-6 login" style={{fontSize: "35px", fontWeight: "bold", padding: "30px 40px"}}>Daftar Sekarang
                    <div class="row">
                        <span class="col"></span>
                    </div>
                    <div class="mb-3 form">
                        <Form style={{fontSize: "20px"}}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Nama Lengkap</Form.Label>
                                <Form.Control className="input" type="text" placeholder="ex: John Doe" required/>
                            </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className="input" type="email" placeholder="Enter email" required/>
                                <Form.Text className="text-muted" style={{fontSize: "15px"}}>contoh : email@rentall.com</Form.Text>
                            </Form.Group>
                        {/* <Row className="mb-3"> 
                        <Form.Group as={Col} controlId="formBasicPNumb">
                                <Form.Label>No. HP</Form.Label>
                                <Form.Control className="input" type="text" placeholder="ex: 08*******" />
                            </Form.Group>
                        
                        <Form.Group as={Col} controlId="formBasicDateOfBirth">
                                <Form.Label>Tanggal Lahir</Form.Label>
                                <Form.Control className="input" type="date" placeholder="DD/MM/YYYY"/>
                            </Form.Group>
                        </Row> */}
                        {/* {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="Male"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                            inline
                            label="Female"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        </div>
                    ))} */}
                        <Row className="mb-3"> 
                            <Form.Group as={Col} controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="input" type="password" placeholder="Password" required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formBasicConfPassword">
                                    <Form.Label>Konfirmasi Password</Form.Label>
                                    <Form.Control className="input" type="password" placeholder="Konfirmasi Password" required/>
                            </Form.Group>
                        </Row>
                        <div className="d-grid gap-2">
                            <Button variant="dark" type="submit" size="lg">Daftar</Button>
                        </div>
                        </Form>
                    </div>
                </div>
                <span class="col"></span>
            </div>
        </div>

        </>
    )
}

export default Register
