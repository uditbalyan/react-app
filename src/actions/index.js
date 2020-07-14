// {
//     type: 'ADD_MOVIES',
//     movies: [m1,m2,m3]
// }
// {
//     type: 'DECREASE_COUNT'
// }


//action types as variables
export const ADD_MOVIES = "ADD_MOVIES";

export function add_movies (movies) {
    //action creators as actions, pattern followed in react community
    return {
        type: ADD_MOVIES,
        movies: movies
    }
}