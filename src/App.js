import './App.css'
import Portfolio from './portfolio/portfolio';
import Reac, {useState, useEffect} from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    //recuperar el valor de localStorage en el momento de la inicializacion
    const saveMode = localStorage.getItem('darkMode');
    return saveMode ? JSON.parse(saveMode) : false;
  });

  useEffect(() => {
    // Actualizar la clase del body basado en el estado de darkMode
    if (darkMode) {
      document.body.classList.add('body-dark');
    } else {
      document.body.classList.remove('body-dark');
    }

    // Guardar el estado de darkMode en localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <Portfolio darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
  )
}

export default App;
