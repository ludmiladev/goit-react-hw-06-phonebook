import React from "react";
import styles from "./ContactsItem.module.css";
import PropTypes from "prop-types";

const ContactsItem = ({ name, number, id, deleteContact }) => {
  const del = () => deleteContact(id);

  return (
    <li className={styles.item}>
      <p>
         <span> {name} {number}</span>
        <button type="button" onClick={del} className={styles.button}>
          Delete
        </button>
      </p>
    </li>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsItem;