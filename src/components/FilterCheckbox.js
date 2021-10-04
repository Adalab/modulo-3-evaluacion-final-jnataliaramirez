function FilterCheckbox(props) {

  const handleHuman = ev => {
    console.log(ev.target.checked)
    props.handleCheckHuman(ev.target.checked)
  }
  const handleAlien = ev => {
    console.log(ev.target.checked)
    props.handleCheckAlien(ev.target.checked)
  }

  return (
    <>
      <div>
        <label htmlFor='human'>
          <input
            id='human'
            type='checkbox'
            name='human'
            value={props.valueHuman}
            onChange={handleHuman}
          />
          Human
        </label>
      </div>
      <div>
        <label htmlFor='alien'>
          <input
            id='alien'
            type='checkbox'
            name='alien'
            value={props.valueAlien}
            onChange={handleAlien}
          />
          Alien
        </label>
      </div>
    </>
  );
}

export default FilterCheckbox;
