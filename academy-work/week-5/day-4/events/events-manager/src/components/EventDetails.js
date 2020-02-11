import React from "react";
import { connect } from "react-redux";
import EventDetailsContainer from "./EventDetailsContainer";
import { Link } from "react-router-dom";
import EventForm from "./EventForm";
class EventDetails extends React.Component {
  render() {
    const event = this.props.event;
    const editModeToggle = () => {
      let editMode = false;
      editMode = !editMode;
      return editMode;
    };

    // console.log("Event check", event);
    return (
      <div>
        <h1>Event Details</h1>
        <button onClick={this.props.editMode}>Edit Mode</button>
        {event ? (
          this.props.editMode ? (
            <EventForm values={{}} />
          ) : (
            <div>
              <h1>{event.name}</h1>
              <h2>{event.date}</h2>
              <p>{event.description}</p>
              <br></br>
              <Link to="/">Events Page</Link>
              <br></br>
              <button onClick={this.props.onDelete}>Delete Event</button>
              <button onClick={this.editModeToggle}>Edit Mode</button>
            </div>
          )
        ) : (
          "Loading events..."
        )}
      </div>
    );
  }
}

export default connect(null, { EventDetailsContainer })(EventDetails);
