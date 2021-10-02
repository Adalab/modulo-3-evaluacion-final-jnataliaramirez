import '../styles/components/CharacterCard.scss'

function CharacterCard(props) {
  return (
    <>
      <img
        src={`${props.dataCharacter.image}`}
        alt={`Imagen del Personaje: ${props.dataCharacter.name}`}
      />
      <h3>{props.dataCharacter.name}</h3>
      <p>{props.dataCharacter.species}</p>
    </>
  );
}

export default CharacterCard;
