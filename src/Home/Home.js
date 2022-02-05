import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img from './../image/home.jpg'
import './Home.css';
const Home = () => {
    return (
        <div className='bg'>
            <div className='my-2 py-5 container'>
            <h1 className=''>Welcome To Merch BD</h1>
            <Row>
                <Col className='my-5 d-flex flex-column align-items-center justify-content-center'> 
                    <h3>Hi there </h3> 
                    <h3>Merch BD is a free blended learning platform developed by Google for educational institutions that aims to simplify creating, distributing, and grading assignments. The primary purpose of Merch BD  is to streamline the process of sharing files between Admin and Users</h3>
                </Col>
                <Col>
                <img src={img} style={{height:"400px"}} alt="" />
                 </Col>
            </Row>
        </div>
        </div>
    );
};

export default Home;