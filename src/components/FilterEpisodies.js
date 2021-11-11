function FilterEpisodies(props) {
  
  const handleEpisodies = (ev) => {
    props.handleChange(ev.target.value)
  }


  return (
    <>
    <label htmlFor="species" className={props.classEpisodies}>Number of episodies:</label>
    <input 
    type="number" 
    name='species'
    id='species'
    placeholder='Search number of episodies'
    value={props.value}
    className={props.class}
    onChange={handleEpisodies}
    />
    </>
  )
}

export default FilterEpisodies; 