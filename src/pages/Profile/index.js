import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import 'bootstrap'
import './profile.css'
import user from '../../assets/user.jpg'

const Profile = () => {
    return (
        <>
            <Container style={{marginTop: "30px", fontSize: "14px"}}>
                <Row>
                    <Col xs={5} md={3}>
                        <Row>
                            <Col sm={4} className="text-end"><img src={user} width="60" class="rounded-circle"></img></Col>
                            <Col style={{marginTop: "10px"}}><span style={{fontWeight: "bold"}}>User</span>
                            <span class="d-flex"><a href="#" style={{fontSize: "10px", color: "black"}}><i class="bi bi-pencil-square"></i>Ubah Profile</a></span></Col>
                        </Row>
                        <div className="line" style={{marginTop: "16px", marginBottom: "20px"}}></div>
                        <span style={{fontWeight: "bold"}}><i class="bi bi-person" style={{fontSize: "20px"}}></i>  Akun Saya</span>
                        <Container>
                            <span className="d-flex"><a href="#" className="link" style={{color: "black"}}>Profile</a></span>
                            <span className="d-flex"><a href="#" className="link" style={{color: "black"}}>Ubah Email</a></span>
                            <span className="d-flex"><a href="#" className="link" style={{color: "black"}}>Ubah Password</a></span>
                            <span className="d-flex"><a href="#" className="link" style={{color: "black"}}>Daftar Alamat</a></span>
                        </Container>

                        <span style={{fontWeight: "bold"}}><i class="bi bi-receipt" style={{fontSize: "20px"}}></i>  Pesanan Saya</span>
                        <span className="d-flex"></span>
                        <span style={{fontWeight: "bold"}}><i class="bi bi-bell" style={{fontSize: "20px"}}></i>  Notifikasi Saya</span>
                        <Container>
                            <span className="d-flex"><a href="#" className="link" style={{color: "black"}}>Status Pesanan</a></span>
                            <span className="d-flex"><a href="#" className="link" style={{color: "black"}}>Promo</a></span>
                            <span className="d-flex"><a href="#" className="link" style={{color: "black"}}>Info RentAll</a></span>
                        </Container>
                    </Col>
                    <Col xs={13} md={9} className="shadow-sm p-3 mb-5 bg-body rounded edit  " style={{border: "1px solid #DEE2E6"}}>
                        <Container>
                            <h4 style={{fontWeight: "bold"}}>Profile Saya</h4>
                            <span style={{fontSize: "14px"}}>Kelola informasi profil Anda untuk mengontrol, melindungi, dan mengamankan akun</span>
                            <div className="line" style={{marginBottom: "20px"}}></div>
                            <Row>
                                <Col xs={9}>
                                    <Form>
                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                            <Form.Label column sm="2">
                                            Username
                                            </Form.Label>
                                            <Col sm="10">
                                            <Form.Control type="password" placeholder="Password" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                            <Form.Label column sm="2">
                                            Nama Lengkap
                                            </Form.Label>
                                            <Col sm="10">
                                            <Form.Control type="password" placeholder="Password" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                            <Form.Label column sm="2">
                                            Email
                                            </Form.Label>
                                            <Col sm="10">
                                            <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                            <Form.Label column sm="2">
                                            No. Telepon
                                            </Form.Label>
                                            <Col sm="10">
                                            <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                            </Col>
                                        </Form.Group>
                                        <fieldset>
                                            <Form.Group as={Row} className="mb-3">
                                            <Form.Label as="legend" column sm={2}>Jenis Kelamin</Form.Label>
                                            <Col sm="2" style={{marginTop: "auto", marginBottom: "auto"}}>
                                                <Form.Check
                                                type="radio"
                                                label="Laki-laki"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios1"
                                                />
                                            </Col>
                                            <Col sm="2" style={{marginTop: "auto", marginBottom: "auto"}}>
                                                <Form.Check
                                                type="radio"
                                                label="Perempuan"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                                />
                                            </Col>
                                            </Form.Group>
                                        </fieldset>
                                        <Form.Group as={Row} controlId="formBasicDateOfBirth">
                                            <Form.Label column sm="2">Tanggal Lahir</Form.Label>
                                            <Col sm="5">
                                            <Form.Control className="input" type="date" placeholder="DD/MM/YYYY"/>
                                            </Col>
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col xs={3} className="text-center">
                                <img src={user} width="60" class="rounded-circle"></img>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Profile
