const initialState = {
  allEvents: [],
  event: {}
};

export default function reducer(state = initialState, action) {
  // console.log("action test:", action);
  switch (action.type) {
    case "EVENTS_FETCHED":
      return { ...state, allEvents: action.payload };
    case "EVENT_FETCHED":
      return { ...state, event: action.payload };
    case "EVENT_CREATE_SUCCESS":
      return { ...state, allEvents: [...state.allEvents, action.payload] };
    case "EVENT_DELETE_SUCCESS":
      const filteredEvents = state.allEvents.filter(
        event => event.id != action.payload
      );
      // console.log(filteredEvents);
      const newState = { ...state, allEvents: filteredEvents, event: {} };
      // console.log(newState);
      return newState;
    default:
      return state;
  }
}
