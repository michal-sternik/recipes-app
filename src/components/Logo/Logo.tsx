import { matchPath, useLocation, useNavigate } from "react-router-dom";


const Logo = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const isRecipeDetailPage = matchPath("/recipes/:id", location.pathname) !== null;


    return (
        <div className={`relative w-full h-1/3 z-1 flex ${isRecipeDetailPage ? 'text-black' : 'text-white'}  flex-row justify-between items-center`}>
            {isRecipeDetailPage && <div
                onClick={() => navigate(-1)}
                className='mx-5 w-35 h-10 justify-center cursor-pointer font-justmeagain border-solid border-1 rounded-lg p-1 flex items-center text-md'>
                Go back
            </div>}
            <hr className=' w-2/5' />
            <div className='mx-10 flex flex-row items-center justify-center h-full object-contain'>
                <img className='w-auto h-full object-contain' src={`/images/${isRecipeDetailPage ? 'logo-black.png' : 'logo.png'}`} alt="Logo" />
                <span className='font-justmeagain text-3xl md:text-6xl px-5 whitespace-nowrap'> Recipe Book </span>
            </div>
            <hr className={`${isRecipeDetailPage ? 'w-0' : "w-2/5"} md:w-2/5`} />
        </div>
    );
};

export default Logo;
