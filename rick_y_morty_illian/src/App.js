import imageRickMortySonrisa from './img/descarga.jpg'
import { useState } from 'react';

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  }

  console.log(characters);

  return (
    <div>
      <header>
        <h1>App Rick and Morty</h1>

        {characters ? (
          <Characters></Characters>
        ) : (
          <>
            <img src={imageRickMortySonrisa} alt="Rick y morty"></img>

            <button onClick={reqApi}>Buscar personaje</button>
          </>
        )}
      </header>
    </div >
  );
}

export default App;