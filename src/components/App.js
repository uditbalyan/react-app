import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { add_movies } from '../actions';

class App extends React.Component {

  componentDidMount() {

    const { store }=this.props;
    
    store.subscribe(() =>{
      //callback of dispatch
      console.log('UPDATED');
      this.forceUpdate();
    });

    //make api call
    //dispatch action
    store.dispatch(add_movies(data));

    console.log('STATE', this.props.store.getState());
  }
  render() {
    const {list} = this.props.store.getState(); // {list:[], favourites:[]}
    console.log('Render');
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {list.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}movie
      </div>
        </div>
      </div>
    );
  }
}

export default App;
