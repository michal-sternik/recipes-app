


interface InputProps {
    handleInputChange: (input: string) => void,
    inputValue: string
}

const InputWithImage = ({ handleInputChange, inputValue }: InputProps) => {


    return (
        <div className=" w-full md:w-[320px] p-1 gap-2 flex items-center justify-center border border-black rounded-lg">
            <img className='ml-3 w-6' src='/images/loupe.png' alt="Logo" />
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

