import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Dashboard.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddTask from '../AddTask.js/AddTask';
import MyTask from '../MyTask/MyTask';


const Dashboard = () => {
    const { logOUt, user, admin } = useAuth()

    const handleSubmit = () => {
        let element = document.getElementById("wrapper");
        element.classList.toggle('toggled')
    }

    return (
        <div className='bg'>
            <h1>Welcome to Admin Dashboard</h1>
            <div className="d-flex" id="wrapper">
                {/* Sidebar*/}
                <div className="bg-white" id="sidebar-wrapper">
                    <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                        className="fas fa-user-secret me-2"></i>Marh-BD</div>
                    <div className="list-group list-group-flush my-3 text-start">
                        <Link className='ms-3' to='/'>Home</Link>
                        {
                            admin && <>
                                <Link className='ms-3' to='users'>Users</Link>
                                <Link className='ms-3' to='my-task'>Tasks</Link>
                                <Link className='ms-3' to='make-admin'>Make-Admin</Link>
                                {/* <Link className='ms-3' to='all-post'>All-Blogs</Link> */}
                            </>
                        }
                        {
                            !admin && <>
                                {/* <Link className='ms-3' to='my-posts'>My-Blog</Link> */}
                                {/* <Link  class="nav-link active" aria-current="page" to="/make-admin">Make Admin</Link>   */}
                                <Link className='ms-3' to='make-admin'>Make Admin</Link>
                                <Link className='ms-3' to='users'>Users</Link>
                                <Link className='ms-3' to='my-task'>Tasks</Link>

                            </>
                        }

                        <button onClick={logOUt} className='logoutBtn ms-3'>Logout</button>
                    </div>
                </div>
                {/* #sidebar-wrapper*/}

                {/*  Page Content */}
                <div id="page-content-wrapper">
                    <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-align-left primary-text fs-4 me-3" onClick={handleSubmit}></i>
                            <h2 className="fs-2 m-0">Dashboard</h2>
                        </div>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <i style={{ color: 'red' }} className="fas fa-user me-2"></i>
                                    <span style={{ color: 'blue', fontWeight: 'bold' }}> {user?.displayName} </span>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {/* Dashboard Main Content  */}
                    <div className="container-fluid px-4 mt-3">
                        <Router>
                            <Switch>
                                <Route path="/tasks/:taskId">
                                    <AddTask></AddTask>
                                </Route>
                                <Route path="/my-task">
                                    <MyTask></MyTask>
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;