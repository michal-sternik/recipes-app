import toast from "react-hot-toast";
import { useParams } from "react-router-dom"
import RecipeService from "../../api/recipeService";
import { useEffect, useState } from "react";
import { RecipeDetailsType } from "../../types/recipeTypes";


const RecipeDetails = () => {

    const [recipe, setRecipe] = useState<RecipeDetailsType | undefined>(undefined)
    const [loading, setLoading] = useState<boolean>(false);
    const { recipeId } = useParams();
    console.log(recipeId)

    const fetchRecipeDetails = async (recipeId: string) => {
        try {
            setLoading(true)

            const recipe: RecipeDetailsType = await RecipeService.getRecipeById(recipeId);
            setRecipe(recipe)

        } catch (error) {
            setLoading(false)
            toast.error("Something went wrong: \n" + error)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchRecipeDetails(recipeId!)
    }, [recipeId])

    return (
        <div>{recipe && recipe.name}</div>
    )
}

export default RecipeDetails