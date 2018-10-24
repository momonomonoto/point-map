import { generate } from "shortid";
import { MAP_CENTER } from "../config";

const initialState = {
  pointList: [],
  mapCenter: MAP_CENTER
};

export const moduleName = "map";
export const ADD_POINT = "ADD_POINT";
export const DELETE_POINT = "DELETE_POINT";
export const UPDATE_COORDINATE_POINT = "UPDATE_COORDINATE_POINT";
export const UPDATE_MAP_CENTER = "UPDATE_MAP_CENTER";
export const SET_MAP_CENTER = "SET_MAP_CENTER";

// reducer
export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_POINT:
      const newPoint = Object.assign({}, payload, {
        coordinate: state.mapCenter
      });
      return { ...state, pointList: state.pointList.concat(newPoint) };

    case DELETE_POINT:
      return {
        ...state,
        pointList: state.pointList.filter(point => point.id !== payload)
      };

    case UPDATE_COORDINATE_POINT:
      const { id, coordinate } = payload;
      const currentPointList = state.pointList.map(point => {
        if (point.id === id) {
          point.coordinate = coordinate;
        }

        return point;
      });
      return { ...state, pointList: currentPointList };

    case UPDATE_MAP_CENTER:
      const currentPoint = state.pointList.find(point => point.id === payload);
      return { ...state, mapCenter: currentPoint.coordinate };

    case SET_MAP_CENTER:
      return { ...state, mapCenter: payload };

    default:
      return state;
  }
}

// action creator
export const addPoint = function(payload) {
  const id = generate();
  const point = {
    value: payload,
    id
  };

  return { type: ADD_POINT, payload: point };
};

export const deletePoint = function(payload) {
  return { type: DELETE_POINT, payload };
};

export const updatePoint = function(payload) {
  return { type: UPDATE_COORDINATE_POINT, payload };
};

export const updateMapCenterByPointCoordinate = function(payload) {
  return { type: UPDATE_MAP_CENTER, payload };
};

export const setMapCenter = function(payload) {
  return { type: SET_MAP_CENTER, payload };
};
