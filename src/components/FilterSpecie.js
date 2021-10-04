function FilterSpecie(props) {
  const handleSpecie = (ev) => {
    props.handleChange(ev.target.value);
  };

  return (
    <select name='specie' id='specie' onChange={handleSpecie}>
      <option value='all'>Todos</option>
      <option value='Human'>Human</option>
      <option value='Alien'>Alien </option>
    </select>
  );
}

export default FilterSpecie;
