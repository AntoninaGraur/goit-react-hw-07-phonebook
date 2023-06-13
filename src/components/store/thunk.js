import { createAsyncThunk } from "@reduxjs/toolkit";

import { getContacts, addContacts, deleteContacts } from "components/services/api.contacts";

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    return await getContacts();
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async data => { 
    return await addContacts(data);
  }
);
 
export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    return await deleteContacts(id);
  }
);




// export const getContacts = state => state.contacts.items;
// export const getFilter = state => state.contacts.filter;

// export const getFilteredContactsList = state => {
//   const { items, filter } = state.contacts;

//   return items.filter(({ name }) =>
//     name.toLowerCase().includes(filter.toLowerCase().trim())
//   );
// };