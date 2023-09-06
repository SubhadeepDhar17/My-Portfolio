import {NavLink} from 'react-router-dom';
import './menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Menu = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const Menu = [
        {
            name: 'Home',
            to: '/',
        },
        {
            name: 'Work',
            to: '/work',
        },
        {
            name: 'About',
            to: '/',
        },
        {
            name: 'Contact',
            to: '/',
        },
    ]
    const MenuMap = Menu.map((list) => <li><NavLink to={list.to}>{list.name}</NavLink></li>);
    return (
        <>
            <div className='navBar'>
                <div className='logo'>
                    Subha
                </div>
                <div className='menuBar'>
                    <nav>
                        {MenuMap}
                    </nav>
                </div>
            </div>
            <div className='mobileMenu'>
                <ul>
                    <li onClick={() => setMobileMenu(!mobileMenu)}
                        className={`hamburger ${mobileMenu ? 'vertical' : 'horizontal'}`} >
                        <FontAwesomeIcon icon={faBars} />
                    </li>
                    <li><h1><NavLink to='/'>Subha</NavLink></h1></li>
                </ul>
            </div>
            <div className={`hamburgerMenu ${mobileMenu ? 'active' : 'inactive'}`}
                onClick={() => setMobileMenu(!mobileMenu)}>
                {MenuMap}
            </div>
        </>
    )
}

export default Menu;