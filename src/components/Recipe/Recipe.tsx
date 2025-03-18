import { RecipeType } from '../../types/recipeTypes';

const Recipe = ({ name, image, cuisine, tags, cookTimeMinutes, difficulty }: RecipeType) => {
    return (
        <div className="h-120 flex flex-col w-8/10 md:w-1/4 m-5 overflow-hidden box-content rounded-xl border-solid border-1 border-black">
            <div className="h-2/5 w-full bg-red-500">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="h-3/5 w-full bg-white flex flex-col">
                <div>{tags.map(tag => <span>{tag}</span>)}</div>
                <div>{name}</div>
                <div className='flex flex-row justify-between'>
                    <span>Cuisine</span>
                    <span>{cuisine}</span>
                </div>
                <div className='flex flex-row justify-between'>
                    <span>Cooking Time</span>
                    <span>{cookTimeMinutes}</span>
                </div>
                <div>{difficulty}</div>
            </div>
        </div>
    );
}


export default Recipe;
