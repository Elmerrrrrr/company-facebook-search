import { 
    CHANGE_SEARCH_FIELD, 
    REQUEST_EMPLOYEES_PENDING,
    REQUEST_EMPLOYEES_SUCCESS,
    REQUEST_EMPLOYEES_FAILED 
} from './constants.js';

export const setSearchField = (text) =>({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestEmployees = () => (dispatch) => { //higher order fucntion, a function that recieves a function
    dispatch({ type: REQUEST_EMPLOYEES_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({type: REQUEST_EMPLOYEES_SUCCESS, payload: data }))
    .catch(error => dispatch({type: REQUEST_EMPLOYEES_FAILED, payload: error}))
}