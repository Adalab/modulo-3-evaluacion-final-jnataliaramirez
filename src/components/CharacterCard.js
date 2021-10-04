import { Link } from 'react-router-dom';
import '../styles/components/CharacterCard.scss'

function CharacterCard(props) {
  return (
    <Link className='cards__link' to={`./character/${props.dataCharacter.id}`}>
      <img
        src={`${props.dataCharacter.image}`}
        alt={`Imagen del Personaje: ${props.dataCharacter.name}`}
        className='cards__item--img'
      />
      <h3 className='cards__item--title'>{props.dataCharacter.name}</h3>
      <p className='cards__item--text' >{props.dataCharacter.species}</p>
    </Link>
  );
}

export default CharacterCard;
