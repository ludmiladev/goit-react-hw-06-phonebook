
import Filter from "./Filter";
import { connect } from "react-redux";
import * as actions from "../../redux/action";
import { getContact, getFilter } from "../../redux/selector";

const mapStateToProps = (state) => ({
  contacts: getContact(state),
  filter: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleFilter: (filter) => dispatch(actions.filterContact(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);