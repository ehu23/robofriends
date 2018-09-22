import { CHANGE_SEARCH_FIELD } from './constants.js'

export const setSearchField = (text) => { //user types in text. returns an object.
    return {
        type: CHANGE_SEARCH_FIELD, //the type of action being taken. constant instead of string because if we misspell a variable, we will get an error as opposed to misspelling a string.
        payload: text  //send payload to reducer
    };
    
}