import React from 'react';
import {Route,Switch, Link} from 'react-router-dom';
export const Nav = () =>{
    return(
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
            <div class="container-fluid">
                <h1 clss="navbar-brand" >Image_Search APP</h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/history">History</Link>
                        </li>
                
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)}