import './App.css'
import Portfolio from './portfolio/portfolio';
import Reac, {useState} from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (darkMode === false) {
      setDarkMode(true);
      console.log("modo oscuro");
    } else {
      setDarkMode(false);
      console.log("modo claro");
    }
  };

  return (
    <Portfolio darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
  )
}

export default App;
