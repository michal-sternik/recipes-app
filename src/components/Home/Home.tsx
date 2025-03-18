
import { useLocation } from 'react-router-dom'
import Recipe from '../Recipe/Recipe';
import { RecipeType } from '../../types/recipeTypes';


const recipes = {
    "recipes": [
        {
            "id": 1,
            "tags": [
                "Pizza",
                "Italian"
            ],
            "name": "Classic Margherita Pizza",
            "cuisine": "Italian",
            "cookTimeMinutes": 15,
            "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
            "difficulty": "Easy"
        },
        {
            "id": 2,
            "tags": [
                "Vegetarian",
                "Stir-fry",
                "Asian"
            ],
            "name": "Vegetarian Stir-Fry",
            "cuisine": "Asian",
            "cookTimeMinutes": 20,
            "image": "https://cdn.dummyjson.com/recipe-images/2.webp",
            "difficulty": "Medium"
        },
        {
            "id": 3,
            "tags": [
                "Cookies",
                "Dessert",
                "Baking"
            ],
            "name": "Chocolate Chip Cookies",
            "cuisine": "American",
            "cookTimeMinutes": 10,
            "image": "https://cdn.dummyjson.com/recipe-images/3.webp",
            "difficulty": "Easy"
        },
        {
            "id": 4,
            "tags": [
                "Pasta",
                "Chicken"
            ],
            "name": "Chicken Alfredo Pasta",
            "cuisine": "Italian",
            "cookTimeMinutes": 20,
            "image": "https://cdn.dummyjson.com/recipe-images/4.webp",
            "difficulty": "Medium"
        },
        {
            "id": 5,
            "tags": [
                "Chicken",
                "Salsa"
            ],
            "name": "Mango Salsa Chicken",
            "cuisine": "Mexican",
            "cookTimeMinutes": 25,
            "image": "https://cdn.dummyjson.com/recipe-images/5.webp",
            "difficulty": "Easy"
        },
        {
            "id": 6,
            "tags": [
                "Salad",
                "Quinoa"
            ],
            "name": "Quinoa Salad with Avocado",
            "cuisine": "Mediterranean",
            "cookTimeMinutes": 15,
            "image": "https://cdn.dummyjson.com/recipe-images/6.webp",
            "difficulty": "Easy"
        }
    ],
    "total": 50,
    "skip": 0,
    "limit": 6
}


const Home = () => {
    const location = useLocation();
    console.log(location.pathname.startsWith('/recipes'))
    console.log(recipes.recipes)
    return (
        <div className="relative md:h-140 flex-col md:flex-row md:flex-wrap flex items-center md:items-start justify-center min-h-full">
            {recipes.recipes && recipes.recipes.map((recipe: RecipeType) => (
                <Recipe key={recipe.id} {...recipe} />
            ))}
        </div>
    )
}

export default Home