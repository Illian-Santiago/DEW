import Characters from './components/Characters';
import imageRickMortySonrisa from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className="title">App Rick and Morty</h1>

        {characters ? (
          <Characters Characters={characters} setCharacters={setCharacters}></Characters>
        ) : (
          <>
            <img src={imageRickMortySonrisa} alt="Rick y morty" className='img-home'></img>

            <button onClick={reqApi} className='btn-search'>Buscar personaje</button>
          </>
        )}
      </header>
    </div >
  );
}

export default App;