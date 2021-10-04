// imports librerias
import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// imports componentes
import Filter from './Filter';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
// imports servicios
import callToApi from '../services/api.js';
// imports estilos
import '../styles/App.scss';

function App() {
  // Variables de estado
  const [searchCharacter, setSearchCharacter] = useState('');
  const [dataCharacters, setDataCharacters] = useState([]);

  // useEffect()
  useEffect(() => {
    callToApi(searchCharacter).then((response) => {
      setDataCharacters(response);
    });
  }, [searchCharacter]);

  // Funciones manejadoras
  const handleSearch = (value) => {
    setSearchCharacter(value);
  };

  // Router
  const routeCharacter = useRouteMatch('/character/:id');
  const characterId = routeCharacter !== null ? routeCharacter.params.id : '';
  
  const selectedCharacter = dataCharacters.find((data) => parseInt(data.id) === parseInt(characterId))
    
  // Funciones auxiliares
  
  
  return (
    <>
      <header>
        <h1>Rick and Morty</h1>
        <form>
          <Filter
            type='text'
            name='search'
            id='search'
            placeholder='Busca aquí tu personaje'
            handleChange={handleSearch}
            value={searchCharacter}
          />
        </form>
      </header>
      <main>
        <Switch>
          <Route exact path='/'>
            <section>
              <CharacterList
                dataCharacters={dataCharacters}
                wordSearch={searchCharacter}
              />
            </section>
          </Route>

          <Route path='/character/:id'>
            <section>
              <CharacterDetail dataCharacter={selectedCharacter} />
            </section>
          </Route>

          <Route>
          <section>
            Oh! Página equivocada
          </section>
          </Route>

        </Switch>
      </main>
    </>
  );
}

export default App;
