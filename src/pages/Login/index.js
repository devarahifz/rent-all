import React from 'react'
import './login.css';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




const Login = () => {
    return (
        <>
        {/* Navbar */}
        <nav class="navbar navbar-light bg">
            <div class="container">
                <div class="row">
                    <span class="col rentall navbar-brand mb-0 h1" style={{color: "white", marginLeft: "50px"}}>RentAll</span>
                    <span class="col" style={{color: "white", fontSize:"45px", marginTop: "6px"}}>|</span>
                    <span class="col" style={{color: "white", fontSize: "36px", marginTop: "12px"}}>Login</span>
                </div>
                <span style={{fontSize: "18px", right: "83.68%"}}><a href="#" class="help" style={{color: "white"}}>Butuh Bantuan</a></span>
            </div>
        </nav>

        {/* Login */}
        <div class="container" style={{marginTop: "50px"}}>
            <div class="row">
                <span class="col"></span>
                <div class="col-6 login" style={{fontSize: "35px", fontWeight: "bold", padding: "30px 40px"}}>Masuk
                    <div class="row">
                        <span class="col"></span>
                        <span class="col-6"></span>
                        <span class="col" style={{fontSize: "15px"}}><a href="#" class="daftar" style={{color: "#FFC107"}}>Daftar</a></span>
                    </div>
                    <div class="mb-3 form">
                        <Form style={{fontSize: "20px"}}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className="input" type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted" style={{fontSize: "15px"}}>contoh : email@rentall.com</Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="input" type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Label label="Check me out"><a href="#" class="link" style={{color: "black"}}>Lupa Password?</a></Form.Label>
                            </Form.Group>
                            <Button variant="dark" type="submit" size="lg">Submit</Button>
                        </Form>
                    </div>
                </div>
                <span class="col"></span>
            </div>
        </div>
        </>

    )
}

export default Login
