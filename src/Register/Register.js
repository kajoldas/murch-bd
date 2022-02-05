import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import img from './../image/PP.jpg'


const Register = () => {
    const {handleUserRegister} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
        const handleEmailChange = e => {
            setEmail(e.target.value);
            e.preventDefault();
        }
        const handlePasswordChange = e => {
            setPassword(e.target.value);
            e.preventDefault();
        }
        const handleRegistration = e  => {
                handleUserRegister(email, password)
                console.log(email, password)
            e.preventDefault();
        }
    return (
        <Container className="py-5 my-5 bg" >
                <Row>
                    <Col>
                        <img style={{ width: '100%' }} src={img} alt="" />
                    </Col>
                    <Col>
                        <Form className="mx-start" onSubmit={handleRegistration}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="d-flex justify-content-start">Email address</Form.Label>
                                <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required/>
                                <Form.Text className="text-muted d-flex justify-content-start">
                                    Enter a valid email here
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicPassword ">
                                <Form.Label className="d-flex justify-content-start">Password</Form.Label>
                                <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                {/* <Form.Check type="checkbox" label="Check me out" /> */}
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            
                        </Form>
                    </Col>
                </Row>
            </Container>
        
    );
};


export default Register;