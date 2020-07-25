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
export const ADD_MOVIE_TO_LIST= "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT= "ADD_SEARCH_RESULT";

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

export function addMovieToList(movie){
    return {
        type: 'ADD_MOVIE_TO_LIST',
        movie: movie
    }
}

export function handleMovieSearch(movie){

    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;

    return function (dispatch){
        fetch(url)
            .then(response => response.json())
            .then( movie =>{
                console.log('movie', movie);

                // dispatch an action
                dispatch(addMovieSearchResult(movie));
            });
    }

}

export function addMovieSearchResult (movie) {
    return {
        type : ADD_SEARCH_RESULT,
        movie: movie
    };
}
