import './pet-card.css';
import PetStats from './pet-stats';

function PetCard(props) {
  return (
    <div className="pet-card">
        <h2> Pet Name: {props.name} </h2>
        {/* turn into a dynamic link via tempalting */}
        <img src={props.link} alt={props.alt} />
        <img src="http://placekitten.com/g/400/400" alt="a placeholder kitten" />
      <PetStats/>
    </div>
  );
}

export default PetCard;
