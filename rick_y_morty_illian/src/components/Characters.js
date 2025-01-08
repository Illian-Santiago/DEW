export default function Characters(props) {
    const { Characters, setCharacters } = props;

    const resetCharacters = () => {
        setCharacters(null);
    }

    return (
        <div className="characters">
            <h1>Characters</h1>
            <span className="back-home" onClick={resetCharacters}>Volver a home</span>
            <div className="container-characters">
                {Characters.map((character, index) => (
                    <div key={index} className="character-container">

                        <div>
                            <img src={character.image} />
                        </div>

                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === "Alive" ? (
                                    <>
                                        <span className="alive" />
                                        Alive
                                    </>
                                ) : (
                                    <>
                                        <span className="dead" />
                                        Dead
                                    </>
                                )}
                            </h6>
                            <p>
                                <span className="text-grey">Episodios:</span>
                                <span>{character.episode.length}</span>
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}