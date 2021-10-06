// imports react
import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// imports components
import Header from './Header';
import FilterCharacter from './FilterCharacter';
import FilterSpecie from './FilterSpecie';
import FilterStatus from './FilterStatus';
import FilterEpisodies from './FilterEpisodies';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
// import Footer from './Footer';
// imports services
import callToApi from '../services/api.js';
// imports styles
import '../styles/App.scss';
import '../styles/components/Form.scss';

function App() {
  // State variables
  const [searchCharacter, setSearchCharacter] = useState('');
  const [dataCharacters, setDataCharacters] = useState([]);
  const [filterSpecie, setFilterSpecie] = useState('');
  const [status, setStatus] = useState('');
  const [episodies, setEpisodies] = useState(0)

  // useEffect()
  useEffect(() => {
    callToApi(searchCharacter).then((response) => {
      setDataCharacters(response);
    });
  }, [searchCharacter]);

  // Handlers
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleSearch = (value) => {
    setSearchCharacter(value);
  };

  const handleSpecie = (value) => {
    setFilterSpecie(value);
  };

  const handleStatus = (value) => {
    setStatus(value);
  }

  const handleEpisodies = (value) => {
    setEpisodies(parseInt(value));
  }

  // Router
  const routeCharacter = useRouteMatch('/character/:id');

  const getRouteCharacter = () => {
    if (routeCharacter) {
      const characterId = routeCharacter !== null ? routeCharacter.params.id : '';
      const selectedCharacter = dataCharacters.find(
        data  => {
          return parseInt(data.id) === parseInt(characterId)
        } 
      );
      return selectedCharacter || {};
    }
  }


  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path='/'>
            <form className='form' onSubmit={handleSubmit}>
              <div>
                <FilterCharacter
                  type='text'
                  name='search'
                  id='search'
                  placeholder='Character search'
                  handleChange={handleSearch}
                  value={searchCharacter}
                  class='form__character'
                />
              </div>
              <FilterStatus handleChange={handleStatus}/>
              <FilterSpecie handleChange={handleSpecie} />
              <FilterEpisodies handleChange={handleEpisodies} value={episodies} class='form__character'/>
            </form>
            <section>
              <CharacterList
                dataCharacters={dataCharacters}
                wordSearch={searchCharacter}
                species={filterSpecie}
                status={status}
                episodies={episodies}
              />
            </section>
          </Route>

          <Route path='/character/:id'>
            <section>
              <CharacterDetail dataCharacter={getRouteCharacter()} />
            </section>
          </Route>

          <Route>
            <section>Oh! Página equivocada 😅 </section>
          </Route>
        </Switch>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
