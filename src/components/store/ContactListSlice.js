import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from './thunk';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.contacts.error = payload;
  state.contacts.isLoading = false;
};

const handleFullfilledGet = (state, { payload }) => {
  state.contacts.items = payload;
  state.contacts.isLoading = false;
};
const handleFullfilledAdd = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.items = [payload, ...state.contacts.items];
};
const handleFullfilledDelete = (state, { payload }) => {
  state.contacts.items = state.contacts.items.filter(
    item => item.id !== payload.id
  );
  state.contacts.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      return { ...state, filter: payload };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFullfilledGet)
      .addCase(addContactsThunk.fulfilled, handleFullfilledAdd)
      .addCase(deleteContactsThunk.fulfilled, handleFullfilledDelete)
      .addMatcher(
        isAnyOf(
          getContactsThunk.pending,
          addContactsThunk.pending,
          deleteContactsThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getContactsThunk.rejected,
          addContactsThunk.rejected,
          deleteContactsThunk.rejected
        ),
        handleRejected
      );
  },
});


export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;









//   reducers: {
//     addContact(state, { payload }) {
//       return { ...state, items: [...state.items, payload] };
//     },
//     deleteContact(state, { payload }) {
//       return {
//         ...state,
//         items: state.items.filter(el => el.id !== payload),
//       };
//     },

//     setFilter(state, { payload }) {
//       state.filter = payload;
//     },
//   },
// });

// export const { setFilter, deleteContact, addContact } = contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer;
