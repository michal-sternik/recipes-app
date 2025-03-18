import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const RootLayout = () => {
    return (
        <>
            <Header>
                <img className='absolute w-full h-full left-0 top-0 object-cover' src='../../public/images/header-background.png'></img>
            </Header >
            <Outlet />
        </ >
    )
}

export default RootLayout