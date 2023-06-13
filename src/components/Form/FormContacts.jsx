import { Notify } from 'notiflix';
import { useState } from 'react';
import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../store/ContactListSlice';
import { getContacts } from '../store/selectors';

import { AddButton, FormInput } from './FormContact.styled';

export function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [setId] = useState(nanoid());

  const searchName = newName => {
    const searchByName = newName.toLowerCase();

    if (contacts.find(({ name }) => name.toLowerCase() === searchByName)) {
      Notify.failure(`"${newName}" is already in contacts`);
      return false;
    }
    return true;
  };

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
  const onSubmit = e => {
    e.preventDefault();
    if (searchName(name)) {
      dispatch(
        addContact({
          name: name,
          number: number,
          id: nanoid(),
        })
      );
      setName('');
      setNumber('');
      setId(nanoid());
    };
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
