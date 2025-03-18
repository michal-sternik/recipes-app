import React from 'react'
import { useLocation } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            "cookTimeMinutes": 15
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
            "cookTimeMinutes": 20
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
            "cookTimeMinutes": 10
        },
        {
            "id": 4,
            "tags": [
                "Pasta",
                "Chicken"
            ],
            "name": "Chicken Alfredo Pasta",
            "cuisine": "Italian",
            "cookTimeMinutes": 20
        },
        {
            "id": 5,
            "tags": [
                "Chicken",
                "Salsa"
            ],
            "name": "Mango Salsa Chicken",
            "cuisine": "Mexican",
            "cookTimeMinutes": 25
        },
        {
            "id": 6,
            "tags": [
                "Salad",
                "Quinoa"
            ],
            "name": "Quinoa Salad with Avocado",
            "cuisine": "Mediterranean",
            "cookTimeMinutes": 15
        }
    ],
    "total": 50,
    "skip": 0,
    "limit": 6
}


const Home = () => {
    const location = useLocation();
    console.log(location.pathname.startsWith('/recipes'))
    return (
        <>
            <div>Home</div>

        </>
    )
}

export default Home