import CharacterCard from './CharacterCard';
import '../styles/components/CharacterList.scss';

function CharacterList(props) {
  if (props.dataCharacters.length === 0) {
    return (
      <h2 className='cards__item--title'>{`No hay ningún personaje 🤷‍♀️ que coincida con la palabra ${props.wordSearch.toUpperCase()} 🙄 `}</h2>
    );
  }

  const dataList = props.dataCharacters
    .filter((dataCharacter) => {
      if (props.species === 'Human') {
        return dataCharacter.species === 'Human';
      } else if (props.species === 'Alien') {
        return dataCharacter.species === 'Alien';
      } else if (props.species === 'Robot') {
        return dataCharacter.species === 'Robot';
      } else if (props.species === 'Animal') {
        return dataCharacter.species === 'Animal';
      }
      return true;
    })
    .filter((dataCharacter) => {
      if (props.status === 'Alive') {
        return dataCharacter.status === 'Alive';
      }
      else if (props.status === 'Dead') {
        return dataCharacter.status === 'Dead';
      }
      else if (props.status === 'unknown') {
        return dataCharacter.status === 'unknown';
      }
      return true;
    })
    .sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
    .map((dataCharacter) => {
      return (
        <li
          className='cards__item'
          key={dataCharacter.id}
          id={dataCharacter.id}
        >
          <CharacterCard dataCharacter={dataCharacter} />
        </li>
      );
    });

  return <ul className='cards'>{dataList}</ul>;
}

export default CharacterList;
