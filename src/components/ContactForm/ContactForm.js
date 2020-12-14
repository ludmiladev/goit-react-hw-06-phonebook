import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import shortid from 'shortid';

class Contactform extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name && this.state.number) {
      this.props.onAddContact({ ...this.state, id: shortid() });
    }
    this.clearState();
  };

  clearState = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Введите имя"
          onChange={this.handleChange}
          value={name}
        />
        <input
          type="text"
          name="number"
          placeholder="Введите номер"
          onChange={this.handleChange}
          value={number}
        />
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default Contactform;