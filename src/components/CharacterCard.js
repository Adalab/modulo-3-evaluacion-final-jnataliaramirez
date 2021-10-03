import { Link } from 'react-router-dom';
import '../styles/components/CharacterCard.scss'

function CharacterCard(props) {
  return (
    <Link to={`./character/${props.dataCharacter.id}`}>
      <img
        src={`${props.dataCharacter.image}`}
        alt={`Imagen del Personaje: ${props.dataCharacter.name}`}
      />
      <h3>{props.dataCharacter.name}</h3>
      <p>{props.dataCharacter.species}</p>
    </Link>
  );
}

export default CharacterCard;
