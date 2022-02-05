import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const User = (props) => {
    const { _id, email } = props.user;
    return (
        <Col className='my-5 py-5 ' xs={6} md={4}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Id: {_id}</Card.Title>
                    <Card.Text> Email:
                        {email}
                    </Card.Text>
                    <Link to={`/tasks/${_id}`}><Button variant="primary"  >Assign Task</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default User;