import React from 'react';

import { NavLink, Link } from 'react-router-dom';
const Header = () => {

    return (
        <header>
            <div>
                <nav>
                    <Link to='/'>
                        <i className="fas fa-jedi"></i>
                    </Link>

                    <NavLink exact to='/' activeClassName='active'>Home</NavLink>


                </nav>
            </div>
        </header>

    );
}

export default Header;