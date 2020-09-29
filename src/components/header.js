import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return(
            <ul>
                <li>
                    <NavLink to='/' >Home</NavLink>
                </li>
                <li>
                    <NavLink to='/competition' >competition</NavLink>
                </li>
                <li>
                    <NavLink to='/login' >Login</NavLink>
                </li>
                <li>
                    <NavLink to='/signup' >signup</NavLink>
                </li>
            </ul>
        )
    }
}

export default Header;