import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './login.css';

const Login = () => {
    return (
        <nav class="navbar navbar-light bg">
            <div class="container-fluid">
            <div class="row">
                <span class="col rentall navbar-brand mb-0 h1" style={{color: "white", marginLeft: "180px"}}>RentAll</span>
                <span class="col" style={{color: "white", fontSize:"45px", marginTop: "6px"}}>|</span>
                <span class="col" style={{color: "white", fontSize: "36px", marginTop: "12px"}}>Login</span>
                {/* <div class="col" style={{color: "white", fontSize: "18px", right: "83.68%"}}>Butuh Bantuan</div> */}
            </div>
                <span class="col" style={{color: "white", fontSize: "18px", marginTop: "12px"}}>Butuh Bantuan</span>
                {/* <span class="font navbar-brand mb-0 h1" style={{color: "white", margin: "0px 180px 0px"}}>Navbar</span>
                <span class="font navbar-brand h2" style={{color: "white"}}>| Login</span>
                <span class="font navbar-brand h2" style={{color: "white"}}>Login</span> */}
            </div>
        </nav>
    )
}

export default Login
