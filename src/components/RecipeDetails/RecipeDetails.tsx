import toast from "react-hot-toast";
import { useParams } from "react-router-dom"
import RecipeService from "../../api/recipeService";
import { useEffect } from "react";
import { ColorsENUM } from "../../types/recipeTypes";
import Chip from "../Chip/Chip";
import TextWithImageOnLeft from "../TextWithImageOnLeft/TextWithImageOnLeft";
import { RecipeSkeleton } from "../RecipeSkeleton/RecipeSkeleton";
import Skeleton from "react-loading-skeleton";
import useSWR from "swr";

const swrConfig = {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 60000,
}

const RecipeDetails = () => {

    const { recipeId } = useParams();

    const { data: recipe, error: allDataError } = useSWR(
        `/recipes/${recipeId}?select=tags,name,image,difficulty,cuisine,cookTimeMinutes,image,servings,ingredients,instructions`,
        RecipeService.getRecipeById,
        swrConfig
    );


    useEffect(() => {
        if (allDataError) {
            toast.error("Error with this recipe: \n" + allDataError)
        }
    }, [allDataError])

    return (
        <div className="flex flex-col gap-20 md:m-10">
            <div className="flex flex-col md:flex-row gap-10">
                <div className=" h-80 md:h-120 w-full md:flex-1/2">
                    {recipe ? <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" /> : <Skeleton className={'mt-15'} width={'100%'} height={'100%'} />}
                </div>
                <div className="md:flex-1/2">
                    {recipe ? (
                        <div className="font-nunito  w-full bg-white flex flex-col p-5 justify-between gap-10">
                            <div className='flex flex-row gap-2 flex-wrap'>
                                {recipe.tags.map(tag => <Chip key={tag} color={ColorsENUM.ORANGE}>{tag}</Chip>)}
                            </div>
                            <div className='font-justmeagain text-6xl'>{recipe.name}</div>
                            <div className="flex flex-col gap-3">
                                <div className='flex flex-row justify-between'>
                                    <TextWithImageOnLeft imageSrc='/images/level.png'>Level </TextWithImageOnLeft>
                                    <Chip color={ColorsENUM.ORANGE} backgroundColor>{recipe.difficulty}</Chip>
                                </div>
                                <div className='flex flex-row justify-between'>
                                    <TextWithImageOnLeft imageSrc='/images/servings.png'>Servings </TextWithImageOnLeft>
                                    <Chip color={ColorsENUM.ORANGE}>{recipe.servings}</Chip>
                                </div>
                                <div className='flex flex-row justify-between'>
                                    <TextWithImageOnLeft imageSrc='/images/cuisine.png'>Cuisine </TextWithImageOnLeft>
                                    <Chip color={ColorsENUM.RED}>{recipe.cuisine}</Chip>
                                </div>
                                <div className='flex flex-row justify-between'>
                                    <TextWithImageOnLeft imageSrc='/images/time.png'>Cooking Time </TextWithImageOnLeft>
                                    <Chip color={ColorsENUM.BLUE}>{recipe.cookTimeMinutes} min</Chip>
                                </div>

                            </div>
                        </div>)
                        : <RecipeSkeleton mdWidth={'w-1/1'} />}
                </div>
            </div>
            {recipe &&
                <div className="flex flex-col-reverse md:flex-row gap-20">
                    <div className="h-auto w-full md:flex-5/10">
                        <p className="font-justmeagain text-6xl mb-10">Instructions</p>
                        <ul className="flex flex-col gap-5">
                            {recipe.instructions.map((instruction, idx) => <li className="font-nunito text-xl">{idx + 1}. {instruction}</li>)}
                        </ul>
                    </div>
                    <div className="h-auto md:flex-5/10 border-black border-solid border-1 pl-10 pb-10 rounded-lg">
                        <p className="font-justmeagain text-6xl mb-10">Ingredients</p>
                        <ul className="flex flex-col gap-5 list-disc">
                            {recipe.ingredients.map((ingredient) => <li className="font-nunito text-xl">{ingredient}</li>)}
                        </ul>
                    </div>

                </div>
            }

        </div>

    )
}

export default RecipeDetails