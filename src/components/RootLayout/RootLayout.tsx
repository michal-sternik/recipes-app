import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const RootLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header>
                <img className='absolute w-full h-full left-0 top-0 object-cover' src='../../public/images/header-background.png' />
            </Header>
            <div className="flex-1 mx-5">
                <Outlet />
            </div>
        </div>
    );
}

export default RootLayout;
