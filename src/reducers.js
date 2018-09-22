import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from './constants.js'

const initialStateSearch = {
    searchField: ''
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {  //pure function reducer. has defaults to not receive errors
    switch(action.type) {
        case CHANGE_SEARCH_FIELD: //received action called CHANGE_SEARCH_FIELD
            return Object.assign({}, state, {searchField: action.payload}) //return a new state that copies the original state but change searchfield to action.payload
            //return { ...state, {searchField: action.payload}} //different syntax called object destructing or object spread operaetor
        default: 
            return state;
    }
}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false});
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        default: 
            return state;
    }
}