const callToApi = (searchCharacter) => {
  return fetch(
    `https://rickandmortyapi.com/api/character/?name=${searchCharacter}`
  )
    .then((response) => response.json())
    .then((response) => {
      const result = response.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          image: character.image,
          species: character.species,
        };
      });
      return result;
    });
};

export default callToApi;
    