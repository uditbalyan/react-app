import {ADD_MOVIES} from '../actions'

const initialMoviesList = {
list: [],
favourites: []
}
export default function movies(state = initialMoviesList, action) {

    if(action.type === ADD_MOVIES){
        return {
            ...state,
            list: action.movies
        }
    }
    return state;
}