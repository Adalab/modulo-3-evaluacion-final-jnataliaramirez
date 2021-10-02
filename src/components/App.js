// imports react
import { useEffect, useState } from 'react';
// imports componentes
// imports servicios
import callToApi from '../services/api.js';
import '../services/localStorage';
// imports estilos
import '../styles/App.scss';

function App() {
  // Variables de estado
  const [searchCharacter, setSearchCharacter] = useState('');
  const [dataCharacter, setDataCharacter] = useState([ ]);

  // useEffect()
  useEffect(() => {
    callToApi(searchCharacter).then(response => {
      setDataCharacter(response);
    });
  }, [searchCharacter] )

  // Funciones manejadoras
  const handleSearch = (ev) => {
    setSearchCharacter(ev.target.value)
    console.log(ev.target.value)

  }
  // Funciones auxiliares para el Html

  // Render

  return (
    <>
      <header>
        <h1>Rick and Morty</h1>
        <form>
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Busca aquí tu personaje'
            onChange={handleSearch}
          />
        </form>
      </header>
      <main>
        <ul>
          {/* Render  */}
          <li>
            <img src='' alt='Imagen del Personaje:' />
            <h3>Nombre del personaje</h3>
            <p>Especie</p>
          </li>
          {/* Render  */}
          <li>
            <img src='' alt='Imagen del Personaje:' />
            <h3>Nombre del personaje</h3>
            <p>Especie</p>
          </li>
          <li>
            <img src='' alt='Imagen del Personaje:' />
            <h3>Nombre del personaje</h3>
            <p>Especie</p>
          </li>
          <li>
            <img src='' alt='Imagen del Personaje:' />
            <h3>Nombre del personaje</h3>
            <p>Especie</p>
          </li>
        </ul>
      </main>
    </>
  );
}

export default App;
