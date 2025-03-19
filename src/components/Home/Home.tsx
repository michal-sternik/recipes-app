
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useLocation } from 'react-router-dom'
import Recipe from '../Recipe/Recipe';
import { ColorsENUM, RecipesType, RecipeType } from '../../types/recipeTypes';
import Chip from '../Chip/Chip';
import InputWithImage from '../InputWithImage/InputWithImage';
import { useEffect, useRef, useState } from 'react';
import RecipeService from '../../api/recipeService';
import { RecipeSkeleton } from '../RecipeSkeleton/RecipeSkeleton';

const initialRecipesObject = {
    recipes: [],
    total: 0,
    skip: 0,
    limit: 6
}

const Home = () => {

    const [activeFilter, setActiveFilter] = useState<string>("All");
    const [recipesList, setRecipesList] = useState<RecipesType>(initialRecipesObject);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [loadingAllRecipes, setAllRecipesLoading] = useState<boolean>(false);
    const initialized = useRef(false)


    const fetchRecipes = async () => {
        try {
            setAllRecipesLoading(true);
            console.log('xd')

            const recipesListFromApi = await RecipeService.getRecipes(recipesList.limit, recipesList.skip); // Pobieramy dane
            setRecipesList((prevState) => ({
                ...recipesListFromApi,
                recipes: [...prevState.recipes, ...recipesListFromApi.recipes],
                skip: prevState.skip + recipesListFromApi.limit
            }));

        } catch (error) {
            console.error("Error fetching recipes:", error);
        } finally {
            setAllRecipesLoading(false);
        }
    };

    useEffect(() => {
        // react wywoluje dwa razy pod rzad render przy pierwszym renderowaniu w strict mode
        // a my w useState wykorzystujemy prevState, czyli mimo podwojnego renderu nasze dane beda przechodzily pomiedzy
        // i renderuje sie ich podwojna ilosc
        // wiec musimy wymusic wywolanie funkcji tylko po pierwszym renderze (poczatkowym)
        // za pomoca useRef dostajemy dostep do wartosci zmiennej, ktora aktualizuje sie od razu, nie trzeba czekac na kolejny render by dostac jej wartosc (a w tym przypadku 2 rendery ze strict mode)
        // wiec pierwszy render strict mode wywola nam funkcje i zmieni wartosc initialized, a drugi juz nie wejdzie do ciala if i nie wywola funkcji
        if (!initialized.current) {
            initialized.current = true;
            fetchRecipes();
        }
    }, []);






    // const location = useLocation();
    // console.log(location.pathname.startsWith('/recipes'))
    // console.log(recipes.recipes)
    return (
        <>
            <div className='flex flex-col md:flex-row justify-between py-10 px-5 gap-10'>
                <InputWithImage />
                <div className='flex md:flex-row-reverse gap-2 flex-row-reverse flex-wrap-reverse justify-end'>

                    {["All", "Easy", "Medium", "Hard"].reverse().map(elem => (
                        <Chip
                            key={elem}
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
                {recipesList.recipes.length > 0 && recipesList.recipes.map((recipe: RecipeType) => (
                    <Recipe key={recipe.id} {...recipe} />
                ))}
                {loadingAllRecipes ? Array(initialRecipesObject.limit).fill(0).map((idx) => <RecipeSkeleton key={idx} />) : null}
            </div>
            <div className='flex p-10 justify-center'>
                <div
                    onClick={fetchRecipes}
                    className='w-40 h-15 justify-center cursor-pointer font-justmeagain border-solid border-1 rounded-lg p-1 flex items-center text-3xl'>
                    {loadingAllRecipes ? <img src='../../public/svg/loading.svg' /> : "Load more"}

                </div>
            </div >
        </>
    )
}

export default Home