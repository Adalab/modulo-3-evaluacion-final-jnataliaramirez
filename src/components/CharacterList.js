import CharacterCard from './CharacterCard';
import '../styles/components/CharacterList.scss'

function CharacterList(props) {
  const dataList = props.dataCharacters.map((dataCharacter) => {
    return (
      <li key={dataCharacter.id} id={dataCharacter.id}>
        <CharacterCard dataCharacter={dataCharacter} />
      </li>
    );
  });

  return <ul>{dataList}</ul>;
}

export default CharacterList;
