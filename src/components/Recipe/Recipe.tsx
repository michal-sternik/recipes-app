import { Link } from 'react-router-dom';
import { ColorsENUM, RecipeType } from '../../types/recipeTypes';
import Chip from '../Chip/Chip';
import TextWithImageOnLeft from '../TextWithImageOnLeft/TextWithImageOnLeft';
import { getColorByDifficulty } from '../../utils';

const Recipe = ({ id, name, image, cuisine, tags, cookTimeMinutes, difficulty }: RecipeType) => {




    return (
        <div className="h-120 flex flex-col w-8/10 md:w-3/10 m-5 overflow-hidden box-content rounded-xl border-solid border-1 border-black">
            <div className="h-2/5 w-full">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <hr />
            <div className="font-nunito h-3/5 w-full bg-white flex flex-col p-5 justify-between">
                <div className='flex flex-row gap-2 flex-wrap'>
                    {tags.map(tag => <Chip key={tag} color={ColorsENUM.ORANGE} >{tag}</Chip>)}
                </div>
                <div className='font-justmeagain text-3xl'><Link to={id.toString()}>{name}</Link></div>
                <div className='flex flex-row justify-between'>

                    <TextWithImageOnLeft imageSrc='../../public/images/cuisine.png' ><span className='md:text-xs lg:text-lg'>Cuisine </span></TextWithImageOnLeft>
                    <Chip color={ColorsENUM.RED} ><span className='md:text-xs lg:text-lg'>{cuisine}</span></Chip>
                </div>
                <div className='flex flex-row justify-between'>
                    <TextWithImageOnLeft imageSrc='../../public/images/time.png' ><span className='md:text-xs lg:text-lg text-wrap'>Cooking Time </span> </TextWithImageOnLeft>
                    <Chip color={ColorsENUM.BLUE} ><span className='md:text-xs lg:text-lg'>{cookTimeMinutes} min</span></Chip>
                </div>
                <div className='flex' >
                    <Chip color={getColorByDifficulty(difficulty)} backgroundColor>
                        <span className='md:text-xs lg:text-lg'>{difficulty}</span>
                    </Chip>
                </div>
            </div>
        </div >
    );
}


export default Recipe;
