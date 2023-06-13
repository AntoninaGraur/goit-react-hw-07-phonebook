import React from 'react';

import { ContactList } from './ContactList/ContactList';
import { ContactsForm } from './Form/FormContacts';
import { Container } from './Container/Container';

import { Filter } from './Filter/Filter';
import { FormTitle } from './Form/FormContact.styled';

export function App() {
 
  return (
    <Container>
      <FormTitle>Phonebook</FormTitle>
      <ContactsForm />
      <FormTitle>Contacts</FormTitle>
       <Filter />
      <ContactList />
    </Container>
  );
}