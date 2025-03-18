export interface Recipes {
    recipes: Array<RecipeType>
    total: number;
    skip: number;
    limit: number;
}

export interface RecipeType {
    id: number;
    tags: string[];
    name: string;
    cuisine: string;
    cookTimeMinutes: number;
    image: string;
    difficulty: string,
}
