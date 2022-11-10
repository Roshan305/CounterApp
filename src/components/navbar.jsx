import React, { Component } from 'react';

const NavBar = ({ totalCounters }) => {
    return (
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand mb-0 h1">Navbar {" "}
                <span className='btn btn-primary'>
                    {totalCounters}
                </span>
            </a>
        </nav>
        );
};
 
export default NavBar;