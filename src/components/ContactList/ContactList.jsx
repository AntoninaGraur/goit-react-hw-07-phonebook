import { addContactsThunk, deleteContactsThunk } from '../store/thunk';
import { useDispatch, useSelector } from 'react-redux';

import { ContactMenu, DeleteBtn, ContactsLi } from './ContactList.styled';
import { useEffect } from 'react';
// import Notiflix from 'notiflix';

export function ContactList() {
  const { items } = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  useEffect(() => {
    dispatch(addContactsThunk());
  }, [dispatch]);

  const onDeletecontact = id => {
    dispatch(deleteContactsThunk(id));
  };
  const filteredContact = items?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );
  
   
  

  return (
    <ContactMenu>
      {filteredContact.map(({ id, createdAt, name, phone }) => (
        <ContactsLi key={createdAt}>
          <p>
            {' '}
            {name}:  {phone}
          </p>
          <DeleteBtn type="button" onClick={() => onDeletecontact(id)}>
            Delete
          </DeleteBtn>
        </ContactsLi>
      ))}
    </ContactMenu>
  );
}
