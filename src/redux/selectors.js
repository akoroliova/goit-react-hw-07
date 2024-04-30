import { createSelector } from "@reduxjs/toolkit";

export const selectFilterInput = (state) => {
  return state.filters.name;
};

export const selectContactsArray = (state) => {
  return state.contacts.items;
};

export const selectVisibleContacts = createSelector(
  [selectContactsArray, selectFilterInput],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
