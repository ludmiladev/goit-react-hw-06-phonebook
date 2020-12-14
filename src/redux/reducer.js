import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './action';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactsReducer = createReducer(initialState.contacts, {
  [addContact]: (state, { payload }) => {
    const nameExist = state.find(({ name }) => name === payload.name);
    if (nameExist) {
      alert(`${payload.name} is already in contact`);
      return state;
    }
    return [...state, payload];
  },
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer(initialState.filter, {
  [filterContact]: (state, { payload }) => {
    return (state = payload);
  },
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});