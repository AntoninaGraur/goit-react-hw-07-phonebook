import React from 'react';

import { ContactList } from './ContactList/ContactList';
import { ContactsForm } from './Form/FormContacts';
import { Container } from './Container/Container';

import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from './store/selectors';

import { FormTitle } from './Form/FormContact.styled';

export function App() {
  const items = useSelector(getContacts);
  return (
    <Container>
      <FormTitle>Phonebook</FormTitle>
      <ContactsForm />
      <FormTitle>Contacts</FormTitle>
      {items.length > 1 && <Filter />}
      {items.length > 0 ? (
        <ContactList />
      ) : (
        <p>Add some contacts</p>
      )}
    </Container>
  );
}