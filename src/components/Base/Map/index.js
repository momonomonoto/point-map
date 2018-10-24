import React from "react";
import {
  YMaps,
  Map as YandexMap,
  Placemark,
  Polyline
} from "react-yandex-maps";
import PropTypes from "prop-types";
import {
  optionsPolyline,
  MAP_CENTER,
  MAP_ZOOM,
  generateOptionsPlacemark
} from "../../../config";

export const changeCoordinate = (id, updatePoint) => event => {
  const coordinate = event.originalEvent.target.geometry.getCoordinates();
  if (typeof updatePoint === "function" && id) {
    return updatePoint({ coordinate, id });
  }
  return null;
};

export const getCoordinateList = pointList => {
  if (Array.isArray(pointList)) {
    const coordinateList = pointList.map(point => {
      if (point.coordinate) {
        return point.coordinate;
      }
      return "";
    });
    return coordinateList;
  }
  return null;
};

export const displayPolyline = (showPolyline, pointList) => {
  if (showPolyline && Array.isArray(pointList) && pointList.length > 1) {
    return (
      <Polyline
        geometry={[...getCoordinateList(pointList)]}
        options={optionsPolyline}
      />
    );
  }
  return null;
};

export const displayPlaceMarkList = (
  pointList,
  changeCoordinate,
  updatePoint
) => {
  const isValidPointList = Array.isArray(pointList) && pointList.length > 0;
  const isValidMethodsPointList =
    typeof changeCoordinate === "function" && typeof updatePoint === "function";
  if (isValidMethodsPointList && isValidPointList) {
    const placeMarkList = pointList.map(({ value, id, coordinate }) => {
      return (
        <Placemark
          key={id}
          geometry={coordinate}
          onGeometryChange={changeCoordinate(id, updatePoint)}
          {...generateOptionsPlacemark(value)}
        />
      );
    });
    return placeMarkList;
  }
  return null;
};

export const createMapState = mapCenter => {
  if (Array.isArray(mapCenter)) {
    const mapState = {
      center: mapCenter,
      zoom: MAP_ZOOM
    };
    return mapState;
  }
  return null;
};

export const changeMapCenter = setMapCenter => event => {
  if (typeof setMapCenter === "function") {
    const newMapCenterCoords = event.originalEvent.target.getCenter();
    setMapCenter(newMapCenterCoords);
  }
  return null;
};

export default function Map({ ...props }) {
  const {
    mapCenter,
    showPolyline,
    mapWitdh,
    mapHeight,
    pointList,
    className,
    updatePoint,
    setMapCenter
  } = props;

  return (
    <div className={className}>
      <YMaps>
        <YandexMap
          state={createMapState(mapCenter)}
          width={mapWitdh}
          height={mapHeight}
          onBoundsChange={changeMapCenter(setMapCenter)}
        >
          {displayPlaceMarkList(pointList, changeCoordinate, updatePoint)}
          {displayPolyline(showPolyline, pointList)}
        </YandexMap>
      </YMaps>
    </div>
  );
}

Map.propTypes = {
  mapCenter: PropTypes.array,
  setMapCenter: PropTypes.func.isRequired,
  updatePoint: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  showPolyline: PropTypes.bool,
  mapWitdh: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mapHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pointList: PropTypes.array
};

Map.defaultProps = {
  mapCenter: MAP_CENTER,
  showPolyline: true,
  mapWitdh: "100%",
  mapHeight: "93vh",
  pointList: []
};
