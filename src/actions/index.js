// {
//     type: 'ADD_MOVIES',
//     movies: [m1,m2,m3]
// }
// {
//     type: 'DECREASE_COUNT'
// }


//action types as variables
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";
export const SHOW_FAVOURITES = "SHOW_FAVOURITES";

export function addMovies (movies) {
    //action creators as actions, pattern followed in react community
    return {
        type: ADD_MOVIES,
        movies: movies
    }
}

export function addFavourites (movie) {
    //action creators as actions, pattern followed in react community
    return {
        type: ADD_FAVOURITES,
        movie: movie
    }
}

export function removeFavourites (movie) {
    //action creators as actions, pattern followed in react community
    return {
        type: REMOVE_FAVOURITES,
        movie: movie
    }
}

export function showFavourites (val) {
    //action creators as actions, pattern followed in react community
    return {
        type: SHOW_FAVOURITES,
        val: val
    }
}