import { connect } from 'react-redux';
import { getContact } from '../../redux/selector';
import App from './App';

const mapStateToProps = state => ({
  contacts: getContact(state),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);