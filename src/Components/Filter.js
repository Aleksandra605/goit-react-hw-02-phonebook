import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label>Find contacts by name</label>
      <input onChange={onChange} value={value}></input>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
