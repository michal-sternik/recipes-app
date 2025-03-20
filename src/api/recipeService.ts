
import { recipeApi } from "./recipeApi.ts"

class RecipeService {

    static getAllRecipes2(arg0: string, getAllRecipes2: any, arg2: { revalidateOnFocus: boolean; revalidateOnReconnect: boolean; dedupingInterval: number }): { data: any; isLoading: any } {
        throw new Error('Method not implemented.')
    }

    public static async getRecipes(limit: number, skip: number) {

        const response = await recipeApi.get(`/recipes?limit=${limit}&skip=${skip}&select=tags,name,image,difficulty,cuisine,cookTimeMinutes,image`)
        return response.data
    }

    public static async getAllRecipes() {

        const response = await recipeApi.get(`/recipes?limit=50&select=tags,name,image,difficulty,cuisine,cookTimeMinutes,image`)
        return response.data
    }

    // public static async getRecipesByDifficulty(limit: number, skip: number) {

    //     const response = await recipeApi.get(`/recipes?limit=${limit}&skip=${skip}&select=tags,name,image,difficulty,cuisine,cookTimeMinutes,image`)
    //     return response.data
    // }

    public static async getRecipesBySearchPhrase(searchPhrase: string, limit: number, skip: number) {

        const response = await recipeApi.get(`/recipes/search?q=${searchPhrase}&limit=${limit}&skip=${skip}&select=tags,name,image,difficulty,cuisine,cookTimeMinutes,image`)
        return response.data
    }

    public static async getRecipeById(id: number) {

        const response = await recipeApi.get(`/recipes/${id}?select=tags,name,image,difficulty,cuisine,cookTimeMinutes,image,servings,ingredients,instructions`)
        return response.data
    }

}

export default RecipeService