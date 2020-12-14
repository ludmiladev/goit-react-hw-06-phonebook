import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import pop from "../../transitions/pop.module.css";
import styles from "./Filter.module.css"

const Filter = ({ contacts, filter, handleFilter }) => (
  <CSSTransition
    classNames={pop}
    timeout={250}
    unmountOnExit
    in={contacts.length > 1}
  >
    <div className={styles.container}>
      <p>Поиск контакта по имени</p>
      <input
        className={styles.input}
        placeholder="Поиск контакта по имени..."
        value={filter}
        onChange={(e) => handleFilter(e.target.value)}
      />
    </div>
  </CSSTransition>
);

export default Filter;

Filter.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};