import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from './constants.js'

export const setSearchField = (text) => { //user types in text. returns an object.
    return {
        type: CHANGE_SEARCH_FIELD, //the type of action being taken. constant instead of string because if we misspell a variable, we will get an error as opposed to misspelling a string.
        payload: text  //send payload to reducer
    };
    
}

export const requestRobots = () => (dispatch) => { //requestRobots is a higher order function (which returns a function)
    //easier to see if you hit enter right before (dispatch)
    //that way redux-thunk sees dispatch carrying a function instead of an object to reducer, it will snatch it up.
    dispatch({type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
        .catch(err => dispatch({type: REQUEST_ROBOTS_FAILED, payload: err}))
}
