import { Outlet } from 'react-router';
import Menu from '../Menu/menu';
import './layout.scss';

const Layout = () => {
    return (
        <div>
            <Menu />
            <Outlet />
        </div>
    )
}

export default Layout;