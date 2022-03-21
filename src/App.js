import logo from './logo.svg';
import './App.css';
import Cosmetic from './components/Cosmetic/Cosmetic';
import Shoes from './components/Shoes/Shoes';

function App() {
  return (
    <div className="App">
       <Cosmetic></Cosmetic>
       <Shoes></Shoes>
    </div>
  );
}

export default App;
