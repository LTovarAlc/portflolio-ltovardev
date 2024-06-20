import './App.css'
import Portfolio from './portfolio/portfolio';
import Reac, {useState, useEffect} from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    if (darkMode === false) {
      document.body.classList.remove('body-dark');
    } else {
      document.body.classList.add('body-dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
    console.log(darkMode ? "modo claro" : "modo oscuro");
  };

  return (
    <Portfolio darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
  )
}

export default App;
