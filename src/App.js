import './App.css';
import PetDetail from './components/pet-detail';

function App(props) {
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
    <div className="App">
      <h1>My Vitural Pet</h1>
      <PetDetail/>
    </div>
  );
}

export default App;
