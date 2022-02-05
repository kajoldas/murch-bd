import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
// import useFirebase from "../hooks/useFirebase";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import img from './../image/PP.jpg'

const Login = () => {
    // const {googleSignIn, signInUsingGithub} = useFirebase();
    const {googleSignIn, signInUsingGithub} = useAuth();
    return (
        <div className="bg">
            <h1 className="my-2 ">Login</h1>
            <Container className=" my-5" >
                <Row>
                    <Col>
                        <img style={{ width: '100%' }} src={img} alt="" />
                    </Col>
                    <Col>
                        <Form className="mx-start">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="d-flex justify-content-start">Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted d-flex justify-content-start">
                                    Enter a valid email here
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicPassword ">
                                <Form.Label className="d-flex justify-content-start">Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                {/* <Form.Check type="checkbox" label="Check me out" /> */}
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            
                        </Form>
                        <button onClick={googleSignIn} className="btn btn-primary my-2">Google Sign in</button> <br />
                        <button onClick={signInUsingGithub} className="my-2  btn btn-primary"> GitHub</button>
                        <p> New User? <Link to='/register'>Register here</Link></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
