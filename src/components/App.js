import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomepageMoviesContainer from '../containers/HomepageMoviesContainer';
import SingleMovieContainer from '../containers/SingleMovieContainer';
import SearchMoviesContainer from '../containers/SearchMoviesContainer';
import Header from './Header';
import SearchBar from '../containers/SearchBar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header >
      <SearchBar />
      </Header>
      <Switch>
        <Route exact path="/" component={HomepageMoviesContainer} />
        <Route path="/movie/:id" component={SingleMovieContainer} />
        <Route path="/search" component={SearchMoviesContainer} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
