import '../styles/components/FilterStatus.scss';

function FilterStatus(props) {
  const handleStatus = (ev) => {
    props.handleChange(ev.target.value);
  };

  return (
    <div className='filter'>
      <label htmlFor='All'>
      <i class="fas fa-boxes"></i> All
      </label>
      <input
        type='radio'
        id='All'
        name='status'
        value='All'
        onChange={handleStatus}
      />

      <label htmlFor='Alive'>
        <i class='fas fa-heart icon'></i> Alive
      </label>
      <input
        type='radio'
        id='Alive'
        name='status'
        value='Alive'
        onChange={handleStatus}
      />

      <label htmlFor='Dead'>
        <i class='fas fa-skull-crossbones icon'></i> Dead
      </label>
      <input
        type='radio'
        id='Dead'
        name='status'
        value='Dead'
        onChange={handleStatus}
      />

      <label htmlFor='Unknown'>
        <i class='fa fa-question icon' aria-hidden='true'></i> Unknown
      </label>
      <input
        type='radio'
        id='Unknown'
        name='status'
        value='unknown'
        onChange={handleStatus}
      />
    </div>
  );
}

export default FilterStatus;
