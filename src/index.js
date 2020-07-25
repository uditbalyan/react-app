import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import './index.css';
import App from './components/App';
import combineReducers from './reducers';
import thunk from 'redux-thunk';


// function(obj, next, action) a curried form of function used for middleware
const logger =function( {dispatch, getState} ) {
    return function(next){
        return function(action){
            //middleware code
            if(typeof action !== 'function'){
                console.log('ACTION_TYPE = ', action.type);
            }
            next(action); // will block here if next() is not used
        }
    }
}

// const thunk =function( {dispatch, getState} ) {
//     return function(next){
//         return function(action){

//             //middleware code
//             if(typeof action === 'function'){
//                 action(dispatch);
//                 return;
//             }
//             next(action); // will block here if next() is not used
//         }
//     }
// }

const store =createStore(combineReducers, applyMiddleware(logger, thunk));

export const StoreContext =createContext();
class Provider extends React.Component {
    render(){
        const {store} =this.props;
        return <StoreContext.Provider value={store}> 
            {this.props.children}
        </StoreContext.Provider>;
    }
}


console.log(store);

ReactDOM.render(
<Provider store={store}> 
    <App /> 
</Provider>, document.getElementById('root'));


