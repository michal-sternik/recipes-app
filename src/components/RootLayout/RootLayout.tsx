import { matchPath, Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';

const RootLayout = () => {


    const location = useLocation();
    const isRecipeDetailPage = matchPath("/recipes/:id", location.pathname) !== null;

    return (
        <div className="min-h-screen flex flex-col">
            <Header>
                {!isRecipeDetailPage ? <img className='absolute w-full h-full left-0 top-0 object-cover' src='../../public/images/header-background.png' /> : null}
            </Header>
            <div className="flex-1 mx-5">
                <Outlet />
            </div>
        </div>
    );
}

export default RootLayout;
