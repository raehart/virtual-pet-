import './pet-detail.css';
import PetStats from './pet-stats';
import moment from 'moment';

//birth miliseconds generarted when project started- with Date.now - - feature plan is to add on adpotion - when pet select button is clicked
function PetDetail(props) {
  const pet = {
    name: 'Meeps',
    birth: 1644382990446,
    photo: "http://placekitten.com/g/400/400",
    alttext: "a placeholder kitten"
  }

  const petAge = moment(pet.birth, "unix").fromNow();
  return (
    <div className="pet-detail">
      <h2>{pet.name}</h2>
      <div>Hatched {petAge}</div>
      <img src={pet.photo} alt={pet.alttext} />
      <PetStats/>
    </div>
  );
}

export default PetDetail;
