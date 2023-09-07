import {NavLink} from 'react-router-dom';
import './menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Menu = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [myMenuShow, setMyMenuShow] = useState(false);

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

    const MyMenu = [
        {
            icon: faLinkedin,
            to: 'https://www.linkedin.com/in/subhadeep-dhar/',
            target: '_blank',
        },
        {
            icon: faGithub,
            to: 'https://github.com/SubhadeepDhar17',
            target: '_blank',
        },
        {
            icon: faEnvelope,
            to: '/',
            target: '_blank',
        }
    ]
    const MyMenuMap = MyMenu.map((myMenuList) =>
    <li><NavLink to={myMenuList.to} target='_blank'>
        <FontAwesomeIcon style={{borderRadius: '100px'}} icon={myMenuList.icon} />
    </NavLink></li>)

    return (
        <>
            <div className='navBar'>
                <div className='logo' onClick={() => setMyMenuShow(!myMenuShow)}>
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
                        {mobileMenu && myMenuShow ? setMobileMenu(!mobileMenu) : null}
                    </li>
                    <li>
                        <div>
                            <h1 onClick={() => setMyMenuShow(!myMenuShow)}>Subha</h1>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={`subhaMenu ${myMenuShow ? 'myMenuActive' : 'myMenuInactive'}`}>
                {MyMenuMap}
            </div>
            <div className={`hamburgerMenu ${mobileMenu ? 'active' : 'inactive'}`}
                onClick={() => setMobileMenu(!mobileMenu)}>
                {MenuMap}
            </div>
        </>
    )
}

export default Menu;