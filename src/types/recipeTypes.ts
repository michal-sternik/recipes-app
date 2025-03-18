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
    difficulty: "Easy" | "Medium" | "Hard",
}

export enum ColorsENUM {
    RED = 'RED',
    GREEN = 'GREEN',
    ORANGE = 'ORANGE',
    BLUE = 'BLUE'
}