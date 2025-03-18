export interface Recipes {
    recipes: Array<Recipe>
    total: number;
    skip: number;
    limit: number;
}

export interface Recipe {
    id: number;
    tags: string[];
    name: string;
    cuisine: string;
    cookTimeMinutes: number;
}
