import { connect } from 'react-redux';
import { addContact } from '../../redux/action';
import ContactForm from './ContactForm';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onAddContact: contact => dispatch(addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);