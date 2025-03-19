
import { recipeApi } from "./recipeApi.ts"

class RecipeService {

    public static async getRecipes(limit: number, skip: number) {

        const response = await recipeApi.get(`/recipes?limit=${limit}&skip=${skip}&select=tags,name,image,difficulty,cuisine,cookTimeMinutes,image`)
        return response.data
    }

}

export default RecipeService