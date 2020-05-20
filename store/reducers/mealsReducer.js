import {MEALS} from '../../data/dummy';
import {TOGGLE_FAVORITE, SET_FILTERS} from '../actions/mealsActions';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS, 
    favoriteMeals: []
}

const mealReducer = (state= initialState, action) => {

    switch(action.type){
        case TOGGLE_FAVORITE:
            const favoriteIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            
            if(favoriteIndex >= 0){
                const updatedFavorites = [...state.favoriteMeals];
                updatedFavorites.splice(favoriteIndex, 1);
                return {
                    ...state,
                    favoriteMeals: updatedFavorites
                };
            }else {
                
               const favMeal = state.meals.find(meal => meal.id === action.mealId);
                return {
                    ...state,
                    favoriteMeals: state.favoriteMeals.concat(favMeal)
                };
            }
        case SET_FILTERS:
            const appliedFilters = action.filters;
            const mealsFiltered = state.meals.filter(meal => {
                if(appliedFilters.glutenFree && !meal.isGlutenFree){
                    return false;
                }
                if(appliedFilters.lactoseFree && !meal.isLactoseFree){
                    return false;
                }
                if(appliedFilters.vegan && !meal.isVegan){
                    return false; 
                }
                if(appliedFilters.vegetarian && !meal.isVegetarian){
                    return false; 
                }
                return true;
            });

            return {
                ...state,
                filteredMeals: mealsFiltered
            }
        default:
            return state;   
    }

    
}
export default mealReducer;