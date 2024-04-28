import { createSelector, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { selectNameFilter } from "./filtersSlice";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContact(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items.splice(index, 1);
    },

    // Виконається в момент старту HTTP-запиту
    fetchingInProgress(state) {
      state.loading = true;
    },
    // Виконається якщо HTTP-запит завершився успішно
    fetchingSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.items = action.payload;
    },
    // Виконається якщо HTTP-запит завершився з помилкою
    fetchingError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const selectContacts = (state) => {
  return state.contacts.items;
};

export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const {
  addContact,
  deleteContact,
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
