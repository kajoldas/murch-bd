import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Task = (props) => {
    const { _id, email, name , description} = props.task;
    return (
          <>
           <Col className='bg'>
            <Col className='my-5 py-5 ' xs={6} md={4}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Id: {_id}</Card.Title>
                    <Card.Title>Id: {name}</Card.Title>
                    <Card.Text> Email:
                        {email}
                    </Card.Text>
                    <Card.Title>Id: {description}</Card.Title>
                    <Card.Text> {} </Card.Text>
                    <Link to={`/submit/${_id}`}><Button variant="primary">Submit</Button></Link>
                </Card.Body>
            </Card>
        </Col>
        </Col>
        </>
     
    );
};

export default Task;