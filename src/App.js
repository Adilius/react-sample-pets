import logo from './logo.svg';
import './App.css';
import Pets from './components/Pets';
import PetsItem from './components/PetsItem';

function App() {
  return (
    <div className="App">
        <h1>
          My pets collage
        </h1>
        <Pets/>
    </div>
  );
}

export default App;
