import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './register.css'

const Register = () => {
    return (
        <>
        
        {/* Navbar */}
        <nav class="navbar navbar-light bg">
            <div class="container">
                <div class="row">
                    <span class="col rentall navbar-brand mb-0 h1" style={{color: "white", marginLeft: "50px"}}>RentAll</span>
                    <span class="col" style={{color: "white", fontSize:"45px", marginTop: "6px"}}>|</span>
                    <span class="col" style={{color: "white", fontSize: "36px", marginTop: "12px"}}>Daftar</span>
                </div>
                <span style={{fontSize: "18px", right: "83.68%"}}><a href="#" class="help" style={{color: "white"}}>Butuh Bantuan</a></span>
            </div>
        </nav>

        <div class="container kotak">
            <span class="daftar">Daftar Sekarang</span>
        </div>

        </>
    )
}

export default Register
