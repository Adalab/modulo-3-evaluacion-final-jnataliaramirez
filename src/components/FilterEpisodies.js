function FilterEpisodies(props) {
  
  const handleEpisodies = (ev) => {
    props.handleChange(ev.target.value)
  }


  return (
    <>
    <input 
    type="number" 
    name='species'
    id='species'
    placeholder='Search number episodies'
    value={props.value}
    className={props.class}
    onChange={handleEpisodies}
    />
    </>
  )
}

export default FilterEpisodies; 