type Props = {
    imageSrc: string;
    children: React.ReactNode
}

const TextWithImageOnLeft = ({ imageSrc, children }: Props) => {
    return (
        <div className='gap-2 w-10 flex flex-start flex-row items-center '>
            <img src={imageSrc} />
            {children}
        </div>
    )
}

export default TextWithImageOnLeft