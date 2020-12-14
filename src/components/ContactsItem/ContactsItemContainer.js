import ContactsItem from "./ContactsItem";
import { connect } from "react-redux";
import * as actions from "../../redux/action";

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (filter) => dispatch(actions.deleteContact(filter)),
});

export default connect(null, mapDispatchToProps)(ContactsItem);
