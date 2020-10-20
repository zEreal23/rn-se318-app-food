import { MEALS, PRODUCT } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS, CREATE_PRODUCT} from '../action/meals';

import Product from '../../models/product'

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
    products: [],
    mealProduct: PRODUCT,
    addProduct: [],
};

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(
                meal => meal.id === action.mealId
            )
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex, 1);
                return { ...state, favoriteMeals: updatedFavMeals };
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId);
                return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
            }
        case SET_FILTERS:
            const appliedFilters = action.filters;
            const updatedFilteredMeals = state.meals.filter(meal => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false;
                }
                if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false;
                }
                if (appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false;
                }
                if (appliedFilters.vegan && !meal.isVegan) {
                    return false;
                }
                return true;
            });
            return { ...state, filteredMeals: updatedFilteredMeals };
        case CREATE_PRODUCT:
            console.log('In reducer')
            const newProduct = new Product(
                action.productData.key,
                action.productData.mealid,
                action.productData.catId,
                action.productData.mealtitle,
                action.productData.afford,
                action.productData.complex,
                action.productData.imageurl,
                action.productData.cooktime
            );
            console.log(newProduct)
            return { ...state, addProduct: newProduct };
        default:
            return state;
    }
};
export default mealsReducer;