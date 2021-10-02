import CharacterCard from './CharacterCard';

function CharacterList (props) {
  
  const dataList = 
  props.data.map((dataCharacter) => {
    return (
      <li key={dataCharacter.id} id={dataCharacter.id}>
        <CharacterCard 
        data={dataCharacter}
        />
      </li>
    );
  })

  return <ul>{dataList}</ul>;
};

export default CharacterList; 