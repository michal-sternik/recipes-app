
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useLocation } from 'react-router-dom'
import Recipe from '../Recipe/Recipe';
import { ColorsENUM, RecipesType, RecipeType } from '../../types/recipeTypes';
import Chip from '../Chip/Chip';
import InputWithImage from '../InputWithImage/InputWithImage';
import { useCallback, useEffect, useState } from 'react';
import RecipeService from '../../api/recipeService';
import { RecipeSkeleton } from '../RecipeSkeleton/RecipeSkeleton';


const ITEM_PER_LOAD = 6

const Home = () => {

    const [activeFilter, setActiveFilter] = useState<string>("All");
    const [recipesList, setRecipesList] = useState<RecipeType[]>([]);
    const [recipesFilteredByDifficulty, setRecipesFilteredByDifficulty] = useState<Record<string, RecipeType[]>>([])
    const [currentRecipes, setCurrentRecipes] = useState<RecipeType[]>([])


    const [loadingAllRecipes, setAllRecipesLoading] = useState<boolean>(false);
    const [searchPhrase, setSearchPhrase] = useState<string>("")
    const [offset, setOffset] = useState<number>(0)


    const handleDifficultyFilter = (difficulty: string) => {
        setCurrentRecipes([])
        setOffset(0)
        setActiveFilter(difficulty)
    }


    const loadMoreRecipes = useCallback((difficulty: string = "All") => {
        console.log(difficulty)
        setCurrentRecipes(prevState => {
            const recipesToAdd = difficulty === "All"
                ? recipesList.slice(offset, offset + ITEM_PER_LOAD)
                : recipesFilteredByDifficulty[difficulty!].slice(offset, offset + ITEM_PER_LOAD);
            console.log(recipesToAdd)
            return [...prevState, ...recipesToAdd];
        });
        setOffset(offset + ITEM_PER_LOAD)

    }, [offset, recipesFilteredByDifficulty, recipesList]);


    const handleInputChange = useCallback((input: string) => {
        setCurrentRecipes([])
        setOffset(0)
        setSearchPhrase(input)
        setActiveFilter("All")
    }, [])


    const fetchRecipesBySearchPhrase = async (searchPhrase: string) => {
        if (searchPhrase !== "") {
            try {
                setAllRecipesLoading(true);
                const recipesListFromApi: RecipesType = await RecipeService.getRecipesBySearchPhrase(searchPhrase, ITEM_PER_LOAD, offset);
                setCurrentRecipes(
                    [...currentRecipes, ...recipesListFromApi.recipes]
                );
                setOffset(offset + ITEM_PER_LOAD)
            } catch (error) {
                alert("Error fetching recipes: " + error)
            } finally {
                setAllRecipesLoading(false);
            }
        }
        else {
            loadMoreRecipes()
        }
    };


    const fetchAllRecipes = async () => {
        try {

            setAllRecipesLoading(true);
            const recipesListFromApi: RecipesType = await RecipeService.getAllRecipes();
            setRecipesList(recipesListFromApi.recipes)
            const arr: string[] = ["Easy", "Medium", "Hard"];
            arr.forEach((difficulty: string) => {
                setRecipesFilteredByDifficulty((prevState) => ({
                    ...prevState,
                    [difficulty]: recipesListFromApi.recipes.filter(
                        (recipe) => recipe.difficulty === difficulty
                    ),
                }));
            });

            setCurrentRecipes(recipesListFromApi.recipes.slice(offset, offset + ITEM_PER_LOAD));
            setOffset(offset + ITEM_PER_LOAD)

        } catch (error) {
            alert("Error fetching recipes: " + error)
        } finally {
            setAllRecipesLoading(false);
        }
    }


    useEffect(() => {

        fetchRecipesBySearchPhrase(searchPhrase)
    }, [searchPhrase])

    useEffect(() => {
        loadMoreRecipes(activeFilter)
    }, [activeFilter])

    useEffect(() => {

        fetchAllRecipes();

    }, []);




    // const location = useLocation();
    // console.log(location.pathname.startsWith('/recipes'))
    // console.log(recipes.recipes)
    return (
        <>
            <div className='flex flex-col md:flex-row justify-between py-10 px-5 gap-10'>
                <InputWithImage handleInputChange={handleInputChange} />
                <div className='flex md:flex-row-reverse gap-2 flex-row-reverse flex-wrap-reverse justify-end'>

                    {["All", "Easy", "Medium", "Hard"].reverse().map(elem => (
                        <Chip
                            key={elem}
                            color={activeFilter === elem ? ColorsENUM.BLUE : undefined}
                            backgroundColor={activeFilter === elem}
                            onClick={() => handleDifficultyFilter(elem)}
                        >
                            {elem}
                        </Chip>
                    ))}

                </div>
            </div>
            <div className="relative  flex-col md:flex-row md:flex-wrap flex items-center md:items-start justify-center xl:justify-between min-h-full">
                {currentRecipes && currentRecipes.map((recipe: RecipeType) => (
                    <Recipe key={recipe.id} {...recipe} />
                ))}
                {(currentRecipes.length === 0 && !loadingAllRecipes) && <p>No results found.</p>}
                {loadingAllRecipes ? Array(ITEM_PER_LOAD).fill(0).map((_, idx) => <RecipeSkeleton key={idx} />) : null}
            </div>
            <div className='flex p-10 justify-center'>
                <div
                    onClick={searchPhrase ? () => fetchRecipesBySearchPhrase(searchPhrase) : () => loadMoreRecipes(activeFilter)}
                    className='w-40 h-15 justify-center cursor-pointer font-justmeagain border-solid border-1 rounded-lg p-1 flex items-center text-3xl'>
                    {loadingAllRecipes ? <img src='../../public/svg/loading.svg' /> : "Load more"}

                </div>
            </div >
        </>
    )
}

export default Home