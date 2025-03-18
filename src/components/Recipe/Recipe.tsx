import { ColorsENUM, RecipeType } from '../../types/recipeTypes';
import Chip from '../Chip/Chip';
import TextWithImageOnLeft from '../TextWithImageOnLeft/TextWithImageOnLeft';

const Recipe = ({ name, image, cuisine, tags, cookTimeMinutes, difficulty }: RecipeType) => {

    const getColorByDifficulty = (difficulty: "Easy" | "Medium" | "Hard"): ColorsENUM => {
        switch (difficulty) {
            case "Easy":
                return ColorsENUM.GREEN;
            case "Medium":
                return ColorsENUM.ORANGE;
            case "Hard":
                return ColorsENUM.RED;
            default:
                return ColorsENUM.BLUE;
        }
    };


    return (
        <div className="h-120 flex flex-col w-8/10 md:w-3/10 m-5 overflow-hidden box-content rounded-xl border-solid border-1 border-black">
            <div className="h-2/5 w-full bg-red-500">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <hr />
            <div className="font-nunito h-3/5 w-full bg-white flex flex-col p-5 justify-between">
                <div className='flex flex-row gap-2 flex-wrap'>
                    {tags.map(tag => <Chip color={ColorsENUM.ORANGE} >{tag}</Chip>)}
                </div>
                <div className='font-justmeagain text-3xl'>{name}</div>
                <div className='flex flex-row justify-between'>

                    <TextWithImageOnLeft imageSrc='../../public/images/cuisine.png' >Cuisine </TextWithImageOnLeft>
                    <Chip color={ColorsENUM.RED} >{cuisine}</Chip>
                </div>
                <div className='flex flex-row justify-between'>
                    <TextWithImageOnLeft imageSrc='../../public/images/time.png' >Cooking Time </TextWithImageOnLeft>
                    <Chip color={ColorsENUM.BLUE} >{cookTimeMinutes} min</Chip>
                </div>
                <div className='flex' >
                    <Chip color={getColorByDifficulty(difficulty)} backgroundColor>
                        {difficulty}
                    </Chip>
                </div>
            </div>
        </div >
    );
}


export default Recipe;
