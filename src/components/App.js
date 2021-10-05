// imports librerias
import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// imports componentes
import Header from './Header';
import FilterCharacter from './FilterCharacter';
import FilterSpecie from './FilterSpecie';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Footer from './Footer';
// imports servicios
import callToApi from '../services/api.js';
// imports estilos
import '../styles/App.scss';
import '../styles/components/Form.scss';

function App() {
  // Variables de estado
  const [searchCharacter, setSearchCharacter] = useState('');
  const [dataCharacters, setDataCharacters] = useState([]);
  const [filterSpecie, setFilterSpecie] = useState('');

  // useEffect()
  useEffect(() => {
    callToApi(searchCharacter).then((response) => {
      setDataCharacters(response);
    });
  }, [searchCharacter]);

  // Funciones manejadoras
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleSearch = (value) => {
    setSearchCharacter(value);
  };

  const handleSpecie = (value) => {
    setFilterSpecie(value);
  };

  // Router
  const routeCharacter = useRouteMatch('/character/:id');
  const characterId = routeCharacter !== null ? routeCharacter.params.id : '';

  const selectedCharacter = dataCharacters.find(
    (data) => parseInt(data.id) === parseInt(characterId)
  );

  // Funciones auxiliares

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
              <FilterSpecie handleChange={handleSpecie} />
            </form>
            <section>
              <CharacterList
                dataCharacters={dataCharacters}
                wordSearch={searchCharacter}
                species={filterSpecie}
              />
            </section>
          </Route>

          <Route path='/character/:id'>
            <section>
              <CharacterDetail dataCharacter={selectedCharacter} />
            </section>
          </Route>

          <Route>
            <section>Oh! Página equivocada</section>
          </Route>
        </Switch>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
