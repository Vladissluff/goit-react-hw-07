import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectContacts } from '../../redux/contactsSlice.js';
import { selectFilter } from '../../redux/filterSlice.js';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filterValue.toLowerCase()));

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}