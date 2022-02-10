import './App.css';
import PetDetail from './components/pet-detail';
import PetSelection from './components/pet-selection';

function App(props) {
  



  return (
    <div className="App">
      <h1>My Vitural Pet</h1>
      <PetSelection/>
      <PetDetail/>
    </div>
  );
}

export default App;
