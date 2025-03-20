
import { RecipeType } from "../types/recipeTypes.ts"
import { recipeApi } from "./recipeApi.ts"

class RecipeService {


    // public static async getRecipes(limit: number, skip: number) {

    //     const response = await recipeApi.get(`/recipes?limit=${limit}&skip=${skip}&select=tags,name,image,difficulty,cuisine,cookTimeMinutes,image`)
    //     return response.data
    // }

    // public static async getAllRecipes() {

    //     const response = await recipeApi.get(`/recipes?limit=50&select=tags,name,image,difficulty,cuisine,cookTimeMinutes,image`)
    //     return response.data
    // }

    // public static async getRecipesByDifficulty(limit: number, skip: number) {

    //     const response = await recipeApi.get(`/recipes?limit=${limit}&skip=${skip}&select=tags,name,image,difficulty,cuisine,cookTimeMinutes,image`)
    //     return response.data
    // }

    // public static async getRecipesBySearchPhrase(url: string): Promise<RecipeType[]> {

    //     const response = await recipeApi.get(url)
    //     return response.data.recipes
    // }

    // public static async getRecipeById(id: number) {

    //     const response = await recipeApi.get(`/recipes/${id}?select=tags,name,image,difficulty,cuisine,cookTimeMinutes,image,servings,ingredients,instructions`)
    //     return response.data
    // }

    public static async getAllRecipes(url: string): Promise<RecipeType[]> {

        const response = await recipeApi.get(url)
        return response.data.recipes
    }

}

export default RecipeService