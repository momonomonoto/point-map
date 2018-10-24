import { combineReducers } from "redux";
import map, { moduleName as mapModule } from "../ducks/map";

export default combineReducers({
  [mapModule]: map
});
