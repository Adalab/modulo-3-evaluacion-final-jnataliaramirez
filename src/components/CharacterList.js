function CharacterList (props) {

  return (
    props.dataCharacters.map((dataCharacter) => {
      return (
        <li key={dataCharacter.id} id={dataCharacter.id}>
          <img
            src={`${dataCharacter.image}`}
            alt={`Imagen del Personaje: ${dataCharacter.name}`}
          />
          <h3>{dataCharacter.name}</h3>
          <p>{dataCharacter.species}</p>
        </li>
      );
    })
  );
};

export default CharacterList; 