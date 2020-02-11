import { combineReducers } from "redux";
import eventReducer from "./events";
export default combineReducers({
  events: eventReducer
});
