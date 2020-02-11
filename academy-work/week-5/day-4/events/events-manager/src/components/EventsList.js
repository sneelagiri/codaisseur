import React from "react";
import { loadEvents } from "../actions/events";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CreateEventFormContainer from "./CreateEventFormContainer";
class EventsList extends React.Component {
  componentDidMount() {
    this.props.loadEvents();
  }

  render() {
    // console.log("render props test:", this.props.events);
    return (
      <div className="events-list">
        <h1>List of events</h1>
        <CreateEventFormContainer />
        <ul>
          {this.props.events
            ? this.props.events.map(event => {
                return (
                  <li key={event.id}>
                    <Link to={`/event/${event.id}`}>{event.name}</Link>
                  </li>
                );
              })
            : "Loading events..."}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events.allEvents
});

export default connect(mapStateToProps, { loadEvents })(EventsList);
