function CharacterCard(props) {
  return (
    <>
      <img
        src={`${props.data.image}`}
        alt={`Imagen del Personaje: ${props.data.name}`}
      />
      <h3>{props.data.name}</h3>
      <p>{props.data.species}</p>
    </>
  );
}

export default CharacterCard;
