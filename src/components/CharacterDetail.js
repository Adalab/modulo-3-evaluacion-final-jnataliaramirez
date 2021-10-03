import '../styles/components/CharacterDetail.scss'

function CharacterDetail (props) {
  if (props.dataCharacter === undefined) {
    return (
      <section>
        <p>Personaje no encontrado</p>
      </section>
    );
  } else {
  return (
    <article>
      <img src={props.dataCharacter.image} alt={`Imagen de ${props.dataCharacter.name}`} />
      <h2>{props.dataCharacter.name} </h2>
      <p><span>Status:</span> {props.dataCharacter.status} </p>
      <p><span>Species:</span> {props.dataCharacter.species} </p>
      <p><span>Origin:</span> {props.dataCharacter.origin} </p>
      <p><span>Episodes:</span> {props.dataCharacter.episodes}</p>
    </article>
  );
} 
}

export default CharacterDetail;