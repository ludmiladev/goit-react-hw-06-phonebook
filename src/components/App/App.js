import React, { Component } from 'react';
import ContactList from '../ContactList/ContactListContainer';
import ContactForm from '../ContactForm/ContactFormContainer';
import Filter from '../Filter/FilterContainer';
import styles from './App.module.css';
import Logo from '../Logo/Logo';

class App extends Component {
  state = {
    isVisible: false,
    filter: '',
    };

  componentDidMount() {
    this.setState({isVisible: true});
    
  }

  setFilter = ({ target }) => {
    this.setState({
      filter: target.value,
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <Logo  />
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}
export default App;
    

       
         
        
        
          
        
        

