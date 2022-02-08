import './pet-card.css';

function PetCard() {
  return (
    <div className="pet-card">
        {/* turn into a dynamic link via tempalting */}
        <img src="http://placekitten.com/g/400/400" alt="a placeholder kitten" />
    </div>
  );
}

export default PetCard;
