import {NavLink} from 'react-router-dom';
import './menu.scss';

const Menu = () => {
    return (
        <>
            <div className='navBar'>
                <div className='logo'>
                    Subha
                </div>
                <div className='menuBar'>
                    <nav>
                        <NavLink exact="true" to="/">
                            Home
                        </NavLink>
                        <NavLink exact="true" to="work">
                            Work
                        </NavLink>
                        <NavLink exact="true" to="/">
                            About
                        </NavLink>
                        <NavLink exact="true" to="/">
                            Contact
                        </NavLink>
                        <NavLink exact="true" to="try">
                            Try
                        </NavLink>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Menu;