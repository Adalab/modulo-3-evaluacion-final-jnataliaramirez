// imports react
import { useEffect, useState } from 'react';
// imports componentes
import Filter from './Filter';
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

  // Render
  const renderSearch = () => {
    return dataCharacters.map((dataCharacter) => {
      return (
        <li key={dataCharacter.id}>
          <img
            src={`${dataCharacter.image}`}
            alt={`Imagen del Personaje: ${dataCharacter.name}`}
          />
          <h3>{dataCharacter.name}</h3>
          <p>{dataCharacter.species}</p>
        </li>
      );
    });
  };

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
          {/* Render  */}
          {renderSearch()}
          {/* Render  */}
        </ul>
      </main>
    </>
  );
}

export default App;
