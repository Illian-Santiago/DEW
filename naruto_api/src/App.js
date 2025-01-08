import './App.css';

import personaje from './Personajes';
import { useState } from 'react';

function App() {
  const [personajes, setPersonajes] = useState(null);

  const llamarApi = async () => {
    const llamada = await fetch("https://narutodb.xyz/api/character");
    const resultados = await llamada.json();
    setPersonajes(resultados);
  }

  console.log(personajes);

  return (
    <>
      <button onClick={llamarApi}>Buscar personaje</button>
    </>
  );
}

export default App;
