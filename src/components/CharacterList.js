import CharacterCard from './CharacterCard';
import '../styles/components/CharacterList.scss';

function CharacterList(props) {

  if (props.dataCharacters.length === 0){
    return <h2>{`No hay ningún personaje que coincida con la palabra ${props.wordSearch}`}</h2>
  } 

  const dataList = 
  props.dataCharacters
  .map((dataCharacter) => {
    return (
        <li key={dataCharacter.id} id={dataCharacter.id} >
          <CharacterCard dataCharacter={dataCharacter} />
        </li>
    );
  });

  return <ul>{dataList}</ul>;
}

export default CharacterList;
