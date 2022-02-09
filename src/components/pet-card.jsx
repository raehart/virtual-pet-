import './pet-card.css';
import PetStats from './pet-stats';

function PetCard(props) {
  const pet = {
    name: 'Meeps',
    birth: 1644382990446,
    photo: "http://placekitten.com/g/400/400",
    alttext: "A tabby kitten, sitting in front of a planter, with its head tilted to one side. In black and white"
  }
  

  //Look into moment JS to format pet age - currently in miliseconds gi

  return (
    <div className="pet-card">
        <h2>{pet.name}</h2>
        <div> Age: {Date.now()-pet.birth} milliseconds old</div>
        <img src={pet.photo} alt={pet.alttext} />
  
      <PetStats/>
    </div>
  );
}

export default PetCard;
