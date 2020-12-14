import { createAction } from "@reduxjs/toolkit";
import shortid from 'shortid';
import { Type } from "./types";

export const addContact = createAction(Type.ADD, contact => ({
  payload: { id: shortid.generate(), ...contact },
}));

export const deleteContact = createAction(Type.DELETE, id => ({
  payload: id,
}));

export const filterContact = createAction(Type.FILTER, value => ({
  payload: value,
}));

