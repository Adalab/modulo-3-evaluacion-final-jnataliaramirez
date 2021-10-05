const callToApi = (searchCharacter) => {
  return fetch(
    `https://rickandmortyapi.com/api/character/?name=${searchCharacter}`
  )
    .then((response) => response.json())
    .then((response) => {
      let result;
      if (response.results === undefined) {
        result = [];
      } else {
        result = response.results.map((character) => {
          return {
            id: character.id,
            name: character.name,
            image: character.image,
            species: character.species,
            origin: character.origin.name,
            episodes: character.episode.length,
            status: character.status,
          };
        });
      }
      return result;
    });
};

export default callToApi;
