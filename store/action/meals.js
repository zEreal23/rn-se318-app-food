export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const toggleFavorite = (id) => {
    return { type: TOGGLE_FAVORITE, mealId: id }
};

export const setFilters = filterSetting => {
    return { type: SET_FILTERS, filters: filterSetting }
};

export const createProduct = (mealid, catId, mealtitle, afford, complex, imageurl, cooktime) => {
    return async dispatch => {
        const response = await fetch('https://rn-fs-4f5f9.firebaseio.com/products.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mealid,
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

        dispatch({
            type: CREATE_PRODUCT,
            productData: {
                key: resData.name,
                mealid,
                catId,
                mealtitle,
                afford,
                complex,
                imageurl,
                cooktime
            }
        });
    };
};

export const updateProduct = (id, catId, mealtitle, afford, complex, imageurl, cooktime) =>{
    return async dispatch => {
        const response = await fetch(`https://rn-fs-4f5f9.firebaseio.com/products/${id}.json`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
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
    }
}

export const deleteProduct = id =>{
    return async dispatch =>{
        await fetch(`https://rn-fs-4f5f9.firebaseio.com/products/${id}.json`,{
            method: 'DELETE'
        })
        console.log('delete')
    }
}