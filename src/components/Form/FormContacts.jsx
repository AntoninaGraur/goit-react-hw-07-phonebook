import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector} from 'react-redux';

import { addContactsThunk, getContactsThunk } from 'components/store/thunk';
import { AddButton, FormInput } from './FormContact.styled';


export function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);
  
  const onChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const { items } = useSelector(state => state.contacts.contacts);


  const onSubmit = e => {
    e.preventDefault();
   
    const newContacts = {
      name: name,
      number: number,
    };
    if (items.some(contact => contact.name.toLowerCase().trim() === name.toLocaleLowerCase().trim()
    )
    ) {
      return   Notify.failure(`"${name}" is already in contacts`);
    }
    dispatch(addContactsThunk(newContacts));
    setName('');
    setNumber('');

  };
  return (
    <form onSubmit={onSubmit}>
      <p>Name</p>
      <FormInput
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
        placeholder="Enter your name"
      />
      <p>Number</p>
      <FormInput
        type="tel"
        name="number"
        value={number}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
        placeholder="Enter your number"
      />
      <AddButton type="submit">Add contact</AddButton>
    </form>
  );
}
