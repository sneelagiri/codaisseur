import React from "react";
import { connect } from "react-redux";
import CreateEventFormContainer from "./CreateEventFormContainer";
class EventForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={this.props.onChange}
            value={this.props.values.name}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            onChange={this.props.onChange}
            value={this.props.values.date}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            onChange={this.props.onChange}
            value={this.props.values.description}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default connect(null, { CreateEventFormContainer })(EventForm);
