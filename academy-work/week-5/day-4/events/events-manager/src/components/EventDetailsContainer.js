import React from "react";
import { connect } from "react-redux";
import EventDetails from "./EventDetails";
import { loadEvent, updateEvent, deleteEvent } from "../actions/events";
class EventDetailsContainer extends React.Component {
  state = {
    editMode: false
  };

  editModeToggle = () => {
    this.setState({ editMode: !this.state.editMode });
  };

  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id));
    // console.log("did mount event: ", this.props.event);
  }
  onDelete = () => {
    this.props.deleteEvent(Number(this.props.event.id));
    this.props.history.push("/");
  };
  render() {
    return (
      <EventDetails
        onDelete={this.onDelete}
        event={this.props.event}
        editMode={this.props.editModeToggle}
      />
    );
  }
}

const mapStateToProps = state => ({
  event: state.events.event
});
export default connect(mapStateToProps, { loadEvent, deleteEvent })(
  EventDetailsContainer
);
