import request from "superagent";
export const EVENTS_FETCHED = "EVENTS_FETCHED";
export const EVENT_FETCHED = "EVENT_FETCHED";
export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS";
export const EVENT_DELETE_SUCCESS = "EVENT_DELETE_SUCCESS";
export const EVENT_PATCHED = "EVENT_PATCHED";
const baseUrl = "http://localhost:4000";
const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  payload: events
});
const eventFetched = event => ({
  type: EVENT_FETCHED,
  payload: event
});

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  payload: event
});

const eventDeleteSuccess = (event, id) => ({
  type: EVENT_DELETE_SUCCESS,
  payload: event,
  id
});

const eventPatch = event => ({
  type: EVENT_PATCHED,
  payload: event
});

export const loadEvents = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  if (getState().events.allEvents.length > 0) return;
  // a GET /events request
  request(`${baseUrl}/event`)
    .then(response => {
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body));
    })
    .catch(console.error);
};

export const loadEvent = id => (dispatch, getState) => {
  // console.log(id);
  request(`${baseUrl}/event/${id}`)
    .then(response => {
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventFetched(response.body));
    })
    .catch(console.error);
};

export const createEvent = data => dispatch => {
  request
    .post(`${baseUrl}/event`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body));
    })
    .catch(console.error);
};

export const deleteEvent = id => dispatch => {
  // console.log(id);
  request
    .delete(`${baseUrl}/event/${id}`)
    .send(id)
    .then(response => {
      if (response.statusCode === 200) {
        dispatch(eventDeleteSuccess(id));
      } else {
        console.log("false response status code when deleting event");
      }
    })
    .catch(console.error);
};

/* export const update = (id, data) => dispatch => {
  if (name )
  request
    .patch(`${baseUrl}/event/${id} name=${name} date=${date} description=${})
    .send(id)
    .then(response => {
      dispatch(eventPatch(response.body));
    })
    .catch(console.error);
}; */
