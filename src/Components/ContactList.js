import PropTypes from 'prop-types';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(contact => {
        const { name, number, id } = contact;
        return (
          <li key={id}>
            {name}: {number}
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};
