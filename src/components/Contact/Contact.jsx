import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';


export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div>
      <div>
        <p>
          <IoPerson/>
          {name}
        </p>
        <p>
          <FaPhoneAlt/>
          {number}
        </p>
      </div>

      <button onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}