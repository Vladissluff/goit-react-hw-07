import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContactsError, selectFilteredContacts, selectLoadingContacts } from '../../redux/contactsSlice.js';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoadingContacts);
  const isError = useSelector(selectContactsError);

  return (
    (isLoading && <b>Loading...</b>) ||
    (isError && <b>{isError}</b>) || (
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    )
  );
}