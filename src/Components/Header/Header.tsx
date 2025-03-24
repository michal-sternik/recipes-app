import { ReactNode } from 'react'
import Logo from '../Logo/Logo';


type HeaderProps = {
    children?: ReactNode;
};

const Header = ({ children }: HeaderProps) => {
    return (
        <div className='relative w-full h-30 md:h-60 flex items-center'>
            <Logo />
            {children}
        </div>
    )
}

export default Header