import { useEffect, useRef, useState } from "react";


interface InputProps {
    handleInputChange: (input: string) => void,
    inputValue: string
}

<<<<<<< HEAD
const InputWithImage = ({ handleInputChange, inputValue }: InputProps) => {
=======
const InputWithImage = ({ handleInputChange }: InputProps) => {
    const [inputValue, setInputValue] = useState("");
    const touched = useRef(false)

    useEffect(() => {

        // react wywoluje dwa razy pod rzad render przy pierwszym renderowaniu w strict mode
        // wiec musimy wymusic wywolanie funkcji tylko jesli juz cos zostanie wpisane przez uzytkownika
        // za pomoca useRef dostajemy dostep do wartosci zmiennej, ktora aktualizuje sie od razu, nie trzeba czekac na kolejny render by dostac jej wartosc (a w tym przypadku 2 rendery ze strict mode)

        if (touched.current) {

            console.log('inside')
            const timer = setTimeout(() => {
                handleInputChange(inputValue)
            }, 400)
            //ewentualnie hook useDebounce
            return () => clearInterval(timer)


        }

    }, [inputValue, handleInputChange])
>>>>>>> single-recipe


    return (
        <div className="p-1 gap-2 flex items-center justify-center border border-black rounded-lg">
            <img className='w-6' src='../../public/images/loupe.png' alt="Logo" />
            <input
                type="text"
                onChange={(e) => {
                    handleInputChange(e.target.value)
                }}
                value={inputValue}
                className="border-none outline-none w-full h-auto"
            />
        </div>
    );
};

export default InputWithImage

