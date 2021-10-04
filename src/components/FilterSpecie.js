function FilterSpecie(props) {
  const handleSpecie = (ev) => {
    props.handleChange(ev.target.value);
  };

  return (
    <div className='form__specie content-select'>
      <select
        name='specie'
        id='specie'
        className='form__specie--select'
        onChange={handleSpecie}
      >
        <option value='all'>All</option>
        <option value='Human'>Human</option>
        <option value='Alien'>Alien</option>
      </select>
      <i></i>
    </div>
  );
}

export default FilterSpecie;
