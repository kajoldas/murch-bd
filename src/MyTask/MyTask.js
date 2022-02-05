import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Task from '../Task/Task';

const MyTask = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return (
        <div>
            <h1>All Task</h1>
            <Row>
                    {
                        tasks.map(task => <Task
                        // key={task.email}
                        task={task}>
                        </Task>)
                    }
            </Row>
        </div>
    );
};

export default MyTask;