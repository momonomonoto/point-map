import reducer from "./map";
import {
  ADD_POINT,
  DELETE_POINT,
  UPDATE_COORDINATE_POINT,
  UPDATE_MAP_CENTER,
  SET_MAP_CENTER
} from "./map";
import { MAP_CENTER } from "../config";

const initialState = {
  pointList: [],
  mapCenter: MAP_CENTER
};

const stateWithPoint = {
  pointList: [{ id: "id", value: "value", coordinate: [0, 0] }]
};
const newPointCoordinate = [0, 0];
const pointWithCoordinate = {
  id: "id",
  value: "value",
  coordinate: [55.76, 37.64]
};

test("Return the default state", () => {
  const action = {};
  expect(reducer(initialState, action)).toEqual(initialState);
});

test("Add point to state", () => {
  const point = { id: "id", value: "value" };
  const action = { type: ADD_POINT, payload: point };
  const state = reducer(initialState, action);

  expect(state.pointList).toEqual([pointWithCoordinate]);
});

test("Delete point from state", () => {
  const actionDelete = { type: DELETE_POINT, payload: "id" };
  const changedState = reducer(stateWithPoint, actionDelete);

  expect(changedState.pointList).toEqual([]);
});

test("Update point from state", () => {
  const actionUpdate = {
    type: UPDATE_COORDINATE_POINT,
    payload: { id: "id", coordinate: newPointCoordinate }
  };
  const changedState = reducer(stateWithPoint, actionUpdate);

  expect(changedState.pointList[0].coordinate).toEqual(newPointCoordinate);
});

test("Update map center from point", () => {
  const actionUpdateMapCenter = { type: UPDATE_MAP_CENTER, payload: "id" };
  const changedState = reducer(stateWithPoint, actionUpdateMapCenter);

  expect(changedState.mapCenter).toEqual(newPointCoordinate);
});

test("Set map center", () => {
  const actionSetNewMapCenter = {
    type: SET_MAP_CENTER,
    payload: newPointCoordinate
  };
  const stateWithChangedMapCenter = reducer(
    initialState,
    actionSetNewMapCenter
  );
  expect(stateWithChangedMapCenter.mapCenter).toEqual(newPointCoordinate);
});
