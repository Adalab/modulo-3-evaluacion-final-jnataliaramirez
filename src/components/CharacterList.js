import CharacterCard from './CharacterCard';
import '../styles/components/CharacterList.scss'

function CharacterList(props) {

  const handleClick = ev => {
    props.handleClick(ev.currentTarget.id)
  }

  const dataList = props.dataCharacters.map( dataCharacter => {
    return (
      <li
       key={dataCharacter.id} 
       id={dataCharacter.id}
       onClick={handleClick}
       >
        <CharacterCard dataCharacter={dataCharacter} />
      </li>
    );
  });

  return <ul>{dataList}</ul>;
}

export default CharacterList;
