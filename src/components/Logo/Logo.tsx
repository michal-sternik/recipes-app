

const Logo = () => {
    return (
        <div className='relative w-full h-1/3 z-1 flex text-white flex-row justify-between items-center'>
            <hr className='text-white w-2/5' />
            <div className='mx-10 flex flex-row items-center justify-center h-full object-contain'>
                <img className='w-auto h-full object-contain' src='../../public/images/logo.png' alt="Logo" />
                <span className='font-sans text-6xl px-5 whitespace-nowrap'> Recipe Book </span>
            </div>
            <hr className='text-white w-2/5' />
        </div>
    );
};

export default Logo;
