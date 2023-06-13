

import { deleteContact } from 'components/store/ContactListSlice';
import { useDispatch, useSelector } from 'react-redux'
import { getFilteredContactsList } from 'components/store/selectors';
import { ContactMenu, DeleteBtn } from './ContactList.styled';

export function ContactList() { 

  const filteredContactsList = useSelector(getFilteredContactsList);
  const dispatch = useDispatch();

  const onContactDelete = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <ContactMenu>{filteredContactsList.map(contact => (
      <li key={contact.id}>
        <p> {contact.name}:  {contact.number}</p>
        <DeleteBtn onClick={() => onContactDelete(contact.id)}>
          Delete</DeleteBtn>
      </li>
    ))}
    </ContactMenu>);
};