import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import  LandingPage  from './components/LandingPage/LandingPage';
import { Home } from './components/Home/Home';
import { PokemonDetail } from './components/PokemonDetail/PokemonDetail';
import { PokemonPost } from './components/PokemonPost/PokemonPost';

function App() {
  return (
    <BrowserRouter>  
      <Route exact path={'/'}>
        <LandingPage/>
      </Route>
      <Route exact path={'/Home'}>
          <Home/>
      </Route>
      <Route exact path={'/pokemons/:idPokemon'}>
          <PokemonDetail/>
      </Route>
      <Route exact path={'/pokemon/post'}>
          <PokemonPost/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
