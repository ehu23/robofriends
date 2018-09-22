import { CHANGE_SEARCH_FIELD } from './constants.js'

const initialState = {
    searchField: ''
}

export const searchRobots = (state=initialState, action={}) => {  //pure function reducer. has defaults to not receive errors
    switch(action.type) {
        case CHANGE_SEARCH_FIELD: //received action called CHANGE_SEARCH_FIELD
            return Object.assign({}, state, {searchField: action.payload}) //return a new state that copies the original state but change searchfield to action.payload
            //return { ...state, {searchField: action.payload}} //different syntax called object destructing or object spread operaetor
        default: 
            return state;
    }
}