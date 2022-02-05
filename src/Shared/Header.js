import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import './Header.css';


const Header = () => {
    // const {user, logout} = useFirebase();
    const {user, logout} = useAuth();
    // console.log(user)

    const [isAdmin, setIsAdmin] = useState(false);

   

    return (
        <div className='user-bg'>
            <nav className="navbar navbar-expand-lg  ">
            <div className="container">
                <Link to="/dashboard"><a className="navbar-brand text-decoration-none text-white">Merch BD Dashboard</a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto d-flex  align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/home">Home</Link>
                          
                          
                        </li>
                     
                        <li className="nav-item">
                        <Link className="nav-link active text-white" aria-current="page" to="/my-task">See Tasks</Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link  class="nav-link active text-white" aria-current="page" to="/login">Sign In</Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link  class="nav-link active text-white" aria-current="page" to="/register">Register</Link>    
                        </li>
                        {/* <li className="nav-item">
                            <Link  class="nav-link active" aria-current="page" to="/make-admin">Make Admin</Link>   
                        </li> */}
                        <li className="nav-item mx-4">
                        {user?.email && <button onClick={logout} className='btn btn-primary'>Log Out</button>  }
                        </li>
                        <li className='nav-item'>
                            {user.displayName}
                        </li>
                        <img className='nav-item rounded-pill mx-2' src={user.photoURL} alt="" />
                        
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Header;