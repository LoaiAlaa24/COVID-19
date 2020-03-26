import { combineReducers } from "redux";

const simpleReducer = (state = null) => state;
const rootReducer = combineReducers({ simpleReducer });
export default rootReducer;
