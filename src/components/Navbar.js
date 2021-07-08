import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route, } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar bg-dark navbar-dark navbar-expand-lg ">
            <Router>
                <Link to="/" className="navbar-brand margin-contact">Contacts</Link>
            </Router>
        </nav>
    )
}

export default Navbar
