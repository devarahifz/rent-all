import React from 'react'
import { Col, Container, Row, Form,Button } from 'react-bootstrap'
import './checkout.css'
import user from '../../assets/user.jpg'

const Checkout = () => {
    return (
        <>
            <Container style={{marginTop: "30px"}}>
                <h1 style={{fontWeight: "bold"}}>Checkout</h1>
                <Row style={{marginTop: "30px"}}>
                    <Col xs={11} md={7} className="shadow-sm p-3 mb-5 bg-light rounded" style={{border: "1px solid #DEE2E6"}}>
                        <Form>
                            <h4 style={{fontWeight: "bold"}}><i class="bi bi-house-fill"></i> Kirim ke Alamat</h4>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="3">Nama Lengkap</Form.Label>
                                <Col sm="9">
                                    <Form.Control type="text" placeholder="Nama" required/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="3">No. Telepon</Form.Label>
                                <Col sm="9">
                                    <Form.Control type="number" placeholder="628xxxxxxxxxxx" required/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="3">Alamat</Form.Label>
                                <Col sm="9">
                                    <Form.Control as="textarea" type="text" placeholder="Alamat" required/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="3">Provinsi</Form.Label>
                                <Col sm="9">
                                    <Form.Control type="text" placeholder="Provinsi" required/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="3">Kota/Kabupaten</Form.Label>
                                <Col sm="9">
                                    <Form.Control type="text" placeholder="Kota/Kabupaten" required/>
                                </Col>
                            </Form.Group>
                            <div className="line" style={{marginTop: "20px", marginBottom: "20px"}}></div>
                            <h4 style={{fontWeight: "bold"}}><i class="bi bi-shop-window"></i> Shop Name</h4>
                                <Row>
                                    <Col xs={4} md={4} className="text-center">
                                        <img src={user} width="100"></img>
                                    </Col>
                                    <Col xs={14} md={8} style={{fontSize: "20px"}}>
                                        <Form.Control plaintext readOnly defaultValue="Nama Produk"/>
                                        <Form.Control plaintext readOnly defaultValue="Rp --.---"/>
                                        <Form.Group as={Row} className="mb-3">
                                            <Form.Label column sm="3">Quantity</Form.Label>
                                            <Col sm="9">
                                                <Form.Control type="number" defaultValue="1" required style={{width: "60px"}}/>
                                            </Col>
                                        </Form.Group>
                                        <Form.Control type="text" placeholder="Catatan untuk penjual (Opsional)" style={{width: "400px", marginBottom: "20px"}}/>
                                    </Col>
                                </Row>
                            <div className="line" style={{marginTop: "20px", marginBottom: "20px"}}></div>
                            <h4 style={{fontWeight: "bold"}}><i class="bi bi-credit-card-2-back-fill"></i> Metode Pembayaran</h4>
                            <div style={{fontSize: "20px"}}>
                                <Form.Check type="radio" label="Transfer Bank" name="formHorizontalRadios" id="formHorizontalRadios1"/>
                                <Form.Check type="radio" label="Gopay" name="formHorizontalRadios" id="formHorizontalRadios2"/>
                                <Form.Check type="radio" label="OVO" name="formHorizontalRadios" id="formHorizontalRadios3"/>
                            </div>
                            <Row>
                                <Col></Col>
                                <Col className="text-center">
                                <Button variant="dark" type="submit" style={{width: "200px"}}>Done</Button>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col xs={1} md={1}></Col>
                    <Col xs={6} md={4} className="shadow-sm p-3 mb-5 bg-body rounded" style={{border: "1px solid #DEE2E6", height: "300px"}}>
                        <Form>
                            <h4 style={{fontWeight: "bold"}}>Rincian Harga</h4>
                            <Form.Group as={Row} className="mb-1">
                                <Form.Label column sm="7">Total harga barang</Form.Label>
                                <Col sm="5">
                                    <Form.Control plaintext readOnly defaultValue="Rp total" style={{fontWeight: "bold"}}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="7">Ongkos Kirim</Form.Label>
                                <Col sm="5">
                                    <Form.Control plaintext readOnly defaultValue="Rp ongkir" style={{fontWeight: "bold"}}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-4" style={{fontSize: "20px"}}>
                                <Form.Label column sm="6" style={{fontWeight: "bold"}}>Total Pembayaran</Form.Label>
                                <Col sm="6">
                                    <Form.Control plaintext readOnly defaultValue="Rp total" style={{fontWeight: "bold"}}/>
                                </Col>
                            </Form.Group>
                            <Row>
                                <Col></Col>
                                <Col className="text-center">
                                <Button variant="light" type="submit" style={{width: "200px", backgroundColor: "#FFC107"}}>Confirm</Button>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Checkout
