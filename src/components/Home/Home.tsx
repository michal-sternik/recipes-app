
import { useLocation } from 'react-router-dom'
import Recipe from '../Recipe/Recipe';
import { ColorsENUM, Recipes, RecipeType } from '../../types/recipeTypes';
import Chip from '../Chip/Chip';
import InputWithImage from '../InputWithImage/InputWithImage';
import { useState } from 'react';


const recipes: Recipes = {
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

    const [activeFilter, setActiveFilter] = useState<string>("All");



    const location = useLocation();
    console.log(location.pathname.startsWith('/recipes'))
    console.log(recipes.recipes)
    return (
        <>
            <div className='flex flex-col md:flex-row justify-between py-10 px-5 gap-10'>
                <InputWithImage />
                <div className='flex md:flex-row-reverse gap-2 flex-row-reverse flex-wrap-reverse justify-end'>

                    {["All", "Easy", "Medium", "Hard"].reverse().map(elem => (
                        <Chip
                            color={activeFilter === elem ? ColorsENUM.BLUE : undefined}
                            backgroundColor={activeFilter === elem}
                            onClick={() => setActiveFilter(elem)}
                        >
                            {elem}
                        </Chip>
                    ))}

                </div>
            </div>
            <div className="relative  flex-col md:flex-row md:flex-wrap flex items-center md:items-start justify-center xl:justify-between min-h-full">
                {recipes.recipes && recipes.recipes.map((recipe: RecipeType) => (
                    <Recipe key={recipe.id} {...recipe} />
                ))}
            </div>
            <div className='flex p-10 justify-center'>
                <div
                    onClick={() => { }}
                    className='cursor-pointer font-justmeagain border-solid border-1 rounded-lg px-5 h-auto flex items-center text-3xl'>
                    Load more
                </div>
            </div >
        </>
    )
}

export default Home