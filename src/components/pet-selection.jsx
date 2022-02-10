import './pet-selection.css';

//birth miliseconds generarted when project started- with Date.now - - feature plan is to add on adpotion - when pet select button is clicked
function PetSelection(props) {
  const eggs = [
    {
      name: 'Meeps',
      photo: "http://placekitten.com/g/300/300",
      alttext: "a placeholder kitten"
    }, {
      name: 'Lawl',
      photo: "http://placekitten.com/g/300/301",
      alttext: "a placeholder kitten"
    }, {
      name: 'Chirp',
      photo: "http://placekitten.com/g/301/300",
      alttext: "a placeholder kitten"
    }
  ]

  return (
    <div className="pet-selection">
      <h2>Pick a Pet</h2>
    </div>
  );
}

export default PetSelection;
