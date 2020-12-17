import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './action';



const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) || [
    { id: 'id-1', name: 'Ralf Denscij', number: '938-23-81' },
    { id: 'id-2', name: 'Gloria Djins', number: '304-25-01' },
    { id: 'id-3', name: 'Anton Pecherskij', number: '237-58-75' },
    { id: 'id-4', name: 'Anna Prigoda', number: '316-76-81' },
  ],
  filter: '',
};

const contactsReducer = createReducer(initialState.contacts, {
  [addContact]: (state, { payload }) => {
    const nameExist = state.find(({ name }) => name === payload.name);
    if (nameExist) {
      alert(`${payload.name} is already in contact`);
      // const newContacts = [...state, action.payload];
            return state;
    }
    
    const newContacts = [...state, payload ];
    localStorage.setItem("contacts", JSON.stringify(newContacts));

    return newContacts;
  },
  [deleteContact]: (state, { payload }) =>{
    // state.filter(({ id }) => id !== payload),

    const updateContacts = state.filter(
      contact => contact.id !== payload
    )
    localStorage.setItem("contacts", JSON.stringify(updateContacts));
    return updateContacts;
  }
  
});

const filterReducer = createReducer(initialState.filter, {
  [filterContact]: (state, { payload }) => {

    return (payload);
  },
});



const rootReducer = combineReducers ({
  contacts: contactsReducer,
  filter: filterReducer,
})



export default rootReducer;




