import React from "react";
import { mount, shallow } from "enzyme";
import Map, {
  changeCoordinate,
  getCoordinateList,
  displayPolyline,
  displayPlaceMarkList,
  createMapState
} from "./index";
import { MAP_CENTER, MAP_ZOOM } from "../../../config";

const id = "id";
const updatePoint = jest.fn();
const showPolyline = true;
const pointList = [
  { id: "jk-gl44dg", value: "sdf", coordinate: [55, 25] },
  { id: "jk-gl4345", value: "value", coordinate: [0, 0] }
];
const initialCoordinateList = [[55, 25], [0, 0]];

const mockEvent = {
  originalEvent: {
    target: {
      geometry: {
        getCoordinates() {
          return [0, 0];
        }
      }
    }
  }
};

const defaultMapCenter = {
  center: MAP_CENTER,
  zoom: MAP_ZOOM
};

const mockProps = {
  mapState: {
    center: MAP_CENTER,
    zoom: MAP_ZOOM
  },
  showPolyline: true,
  mapWitdh: "100%",
  mapHeight: "93vh",
  className: "className",
  pointList
};

test("Mount component Map", () => {
  const listComponent = <Map {...mockProps} />;
  mount(listComponent);
});

test("Call event function for change coordinate", () => {
  const callEventToChange = changeCoordinate(id, updatePoint);
  callEventToChange(mockEvent);
  expect(updatePoint).toBeCalled();
});

test("Call event function change withoud id", () => {
  const invalidId = null;
  const callEventToChange = changeCoordinate(invalidId, updatePoint);
  const resultChangeEvent = callEventToChange(mockEvent);
  expect(resultChangeEvent).toBe(null);
});

test("Call event function change without function updatePoint", () => {
  const invalidUpdatePoint = null;
  const callEventToChange = changeCoordinate(id, invalidUpdatePoint);
  const resultChangeEvent = callEventToChange(mockEvent);
  expect(resultChangeEvent).toBe(null);
});

test("Call getCoordinateList", () => {
  const coordList = getCoordinateList(pointList);
  expect(initialCoordinateList).toEqual(coordList);
});

test("Call getCoordinateList without correct list", () => {
  const coordList = getCoordinateList(null);
  expect(null).toEqual(coordList);
});

test("Call displayPolyline", () => {
  const polylineElement = displayPolyline(showPolyline, pointList);
  shallow(polylineElement);
});

test("Call displayPolyline when showPolyline is false", () => {
  const isShowPolylineHide = false;
  const polylineElement = displayPolyline(isShowPolylineHide, pointList);
  expect(polylineElement).toEqual(null);
});

test("Call displayPolyline when pointList is false", () => {
  const invalidPointList = null;
  const polylineElement = displayPolyline(showPolyline, invalidPointList);
  expect(polylineElement).toEqual(null);
});

test("Call displayPlaceMarkList", () => {
  const placemarkElement = displayPlaceMarkList(
    pointList,
    changeCoordinate,
    updatePoint
  );
  shallow(placemarkElement[0]);
});

test("Call displayPolyline with invalid pointList", () => {
  const invalidPointList = null;
  const placemarkElement = displayPlaceMarkList(
    invalidPointList,
    changeCoordinate,
    updatePoint
  );
  expect(placemarkElement).toEqual(null);
});

test("Call displayPolyline with invalid updatePoint", () => {
  const invalidUpdatePoint = null;
  const placemarkElement = displayPlaceMarkList(
    pointList,
    changeCoordinate,
    invalidUpdatePoint
  );
  expect(placemarkElement).toEqual(null);
});

test("Call displayPolyline with invalid changeCoordinate", () => {
  const ivalidChangeCoordinate = null;
  const placemarkElement = displayPlaceMarkList(
    pointList,
    ivalidChangeCoordinate,
    updatePoint
  );
  expect(placemarkElement).toEqual(null);
});

test("Call createMapState", () => {
  const mapCenter = createMapState(MAP_CENTER);
  expect(mapCenter).toEqual(defaultMapCenter);
});

test("Call createMapState with invalid mapCenter", () => {
  const mapCenter = createMapState(null);
  expect(mapCenter).toEqual(null);
});
