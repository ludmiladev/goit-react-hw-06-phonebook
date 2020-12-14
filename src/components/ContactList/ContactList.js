import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import TransitionList from "../../transitions/list.module.css";
import styles from "./ContactList.module.css"
import ContactsItemContainer from "../ContactsItem/ContactsItemContainer";

const filterContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const ContactsList = ({ contacts, filter }) => {
  const filteredContacts = filter ? filterContacts(contacts, filter) : contacts;

  return (
    <TransitionGroup component="ul" className={styles.list}>
      {filteredContacts.map(({ name, number, id }) => (
        <CSSTransition
          timeout={250}
          unmountOnExit
          key={id}
          classNames={TransitionList}
        >
          <ContactsItemContainer name={name} number={number} id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};