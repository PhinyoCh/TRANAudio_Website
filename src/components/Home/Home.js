import React from 'react';
import {Button, Col, Container, Form, Row, Card} from "react-bootstrap";

const Home = () => {
    return (
        <>
            <Container className=" container-fluid bg-dark vh-100 gradient-custom container py-5 h-100 " >
                <div className="shadow-sm text-success mt-5 p-3 text-center rounded card bg-dark text-white" >
                <p className="display-6 text-center fw-bolder ">ระบบเสียงตามสายไร้สาย</p>
                <p className="display-6 text-center fw-bolder ">Wireless audio transmitted systems</p>
                </div>
                

                <Row className="mt-4">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group>
                              <img src="https://icon-library.com/images/icon-account/icon-account-12.jpg" height="50"></img>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="text-white fw-bolder">ADSA</Form.Label>
                                <Form.Control type="email" placeholder="Enter Username" />
                            </Form.Group>
                                                       
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className="text-white fw-bolder">PASSWORD</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button className="mt-2"variant="success btn-block" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 ProjectC05 CPERMUTT All Rights Reserved.</h6>
            </Container>
        </>
    );
};

export default Home;