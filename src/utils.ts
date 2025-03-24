import { ColorsENUM } from "./types/recipeTypes";

export const getColorByDifficulty = (difficulty: string): ColorsENUM => {
    switch (difficulty) {
        case "Easy":
            return ColorsENUM.GREEN;
        case "Medium":
            return ColorsENUM.ORANGE;
        case "Hard":
            return ColorsENUM.RED;
        default:
            return ColorsENUM.BLUE;
    }
};