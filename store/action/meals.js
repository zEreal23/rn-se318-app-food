export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';
export const CREATE_MEAL = 'CREATE_MEAL';

export const toggleFavorite = (id) =>{
    return {type: TOGGLE_FAVORITE , mealId : id}
};

export const setFilters = filterSetting =>{
    return {type: SET_FILTERS  , filters: filterSetting}
};

export const createProduct = (id, catId, mealtitle, afford, complex, imageurl, cooktime) => {
    return async dispatch => {
        const response = await fetch('https://rn-fs-4f5f9.firebaseio.com/products.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id, 
                catId, 
                mealtitle, 
                afford, 
                complex, 
                imageurl, 
                cooktime
            })
        });
 
        const resData = await response.json();
        console.log(resData);
 
        /*dispatch({
            type: CREATE_PRODUCT,
            //newMeal: mealData
            productData: {
                id, 
                catId, 
                mealtitle, 
                afford, 
                complex, 
                imageurl, 
                cooktime
            }
        });*/
    };
};