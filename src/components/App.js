// imports react
import { useEffect, useState } from 'react';
// imports componentes
import Filter from './Filter';
import CharacterList from './CharacterList';
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
  const handleSearch = value => {
    setSearchCharacter(value);
  };
  // Funciones auxiliares para el Html
  

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
        <ul>
          <CharacterList
            dataCharacters={dataCharacters}
            id={dataCharacters.id}
            image={dataCharacters.image}
            name={dataCharacters.name}
            species={dataCharacters.species}
          />
        </ul>
      </main>
    </>
  );
}

export default App;
