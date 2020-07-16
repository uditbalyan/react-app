import {ADD_MOVIES, ADD_FAVOURITES, REMOVE_FAVOURITES, SHOW_FAVOURITES} from '../actions'
import { combineReducers } from 'redux'



const initialMoviesState = {
list: [],
favourites: [],
showFavourites: false
}

export function movies(state = initialMoviesState, action) {

    
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // return state;

    console.log("Movies Reducer");

    switch(action.type){

        case ADD_MOVIES:
            return {
                        ...state,
                        list: action.movies
                    }

        case ADD_FAVOURITES:
            return{
                ...state,
                favourites:[action.movie, ...state.favourites]
            }

        case REMOVE_FAVOURITES:
            const filteredArray= state.favourites.filter(
                movie=> movie.Title !== action.movie.Title
            );

            return{
                ...state,
                favourites:filteredArray
            }
        
            case SHOW_FAVOURITES:
                return{
                    ...state,
                    showFavourites: action.val
                }
        default:
            return state;

    }
}

const initialSearchState = {
    result: {}
}

export function search(state = initialSearchState, action){
    console.log("Search Reducer");
    return state;
}


// const initialRootState={
//     movies: initialMoviesState,
//     search: initialSearchState
// }

// export default function rootReducer(state= initialRootState, action){
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }

export default combineReducers({
    movies,
    search
});