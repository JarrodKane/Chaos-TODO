import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./state/reducers/rootReducer";

export default function configureSotre(initialState = {}) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
