import '../styles/components/CharacterDetail.scss'

function CharacterDetail (props) {
  const renderDeadOrAlive = (statusCharacter) => {
    if (statusCharacter === 'Dead') {
      return <p><span>Status:</span> <i class="fas fa-skull-crossbones"></i> Dead </p>
    } else if (statusCharacter === 'Alive') {
      return <p><span>Status:</span> <i class="fas fa-heart"></i> Alive </p>
    } else if (statusCharacter === 'unknown') {
      return <p><span>Status:</span> <i class="fa fa-question" aria-hidden="true"></i> Unknown </p>
    }
  }

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
      <p><span>Species:</span> {props.dataCharacter.species} </p>
      <p><span>Origin:</span> {props.dataCharacter.origin} </p>
      <p><span>Episodes:</span> {props.dataCharacter.episodes}</p>
      {renderDeadOrAlive(props.dataCharacter.status)}
    </article>
  );
} 
}

export default CharacterDetail;