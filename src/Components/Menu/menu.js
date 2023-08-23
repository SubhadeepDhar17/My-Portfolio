import {NavLink} from 'react-router-dom';
import './menu.scss';

const Menu = () => {
    return (
        <div>
            <div className='navBar'>
                <div className='logo'>
                    Subha
                </div>
                <div className='menuBar'>
                    <nav>
                        <NavLink exact="true" activeClassName = "active" to="/">
                            Home
                        </NavLink>
                        <NavLink exact="true" activeClassName = "active" to="work">
                            Work
                        </NavLink>
                        <NavLink exact="true" activeClassName = "active" to="/">
                            About
                        </NavLink>
                        <NavLink exact="true" activeClassName = "active" to="/">
                            Contact
                        </NavLink>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Menu;