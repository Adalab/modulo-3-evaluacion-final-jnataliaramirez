import { Link } from 'react-router-dom';
import '../styles/components/CharacterCard.scss'

function CharacterCard(props) {

  const renderDeadOrAlive = (statusCharacter) => {
    if (statusCharacter === 'Dead') {
      return (
        <p>
          <span>Status:</span> <i class='fas fa-skull-crossbones icon'></i> Dead
        </p>
      );
    } else if (statusCharacter === 'Alive') {
      return (
        <p>
          <span>Status:</span> <i class='fas fa-heart icon'></i> Alive
        </p>
      );
    } else if (statusCharacter === 'unknown') {
      return (
        <p>
          <span>Status:</span>
          <i class='fa fa-question icon' aria-hidden='true'></i> Unknown
        </p>
      );
    }
  };

  return (
    <Link className='cards__link' to={`./character/${props.dataCharacter.id}`}>
      <img
        src={`${props.dataCharacter.image}`}
        alt={`Imagen del Personaje: ${props.dataCharacter.name}`}
        className='cards__item--img'
      />
      <h3 className='cards__item--title'>{props.dataCharacter.name}</h3>
      <p className='cards__item--text' >Specie: {props.dataCharacter.species}</p>
      {renderDeadOrAlive(props.dataCharacter.status)}

    </Link>
  );
}

export default CharacterCard;
