import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

const AppNavbar = () => {
    return(
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Noah Pang</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to = "/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to = "/projects" activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to = "/hobbies" activeStyle>
                        Hobbies
                    </NavLink>
                    <NavLink to = "/cv" activeStyle>
                        CV
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}

export default AppNavbar;