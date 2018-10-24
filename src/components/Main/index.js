import React from "react";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import Map from "../Base/Map";
import Bar from "../Base/Bar";
import PointList from "../PointList";
import {
  addPoint,
  deletePoint,
  updatePoint,
  setMapCenter,
  updateMapCenterByPointCoordinate
} from "../../ducks/map";
import style from "./style.scss";
import { PROJECT_NAME } from "../../config";

export function Main({
  pointList,
  addPoint,
  deletePoint,
  updatePoint,
  updateMapCenterByPointCoordinate,
  mapCenter,
  setMapCenter
}) {
  return (
    <div>
      <Bar title={PROJECT_NAME} />
      <div className={style.main}>
        <PointList
          clickPoint={updateMapCenterByPointCoordinate}
          pointList={pointList}
          addPoint={addPoint}
          className={style.pointListContainer}
          deletePoint={deletePoint}
        />
        <Map
          className={style.map}
          pointList={pointList}
          mapCenter={mapCenter}
          updatePoint={updatePoint}
          setMapCenter={setMapCenter}
        />
      </div>
    </div>
  );
}

Main.propTypes = {
  pointList: PropTypes.array.isRequired,
  mapCenter: PropTypes.array.isRequired,
  addPoint: PropTypes.func.isRequired,
  updateMapCenterByPointCoordinate: PropTypes.func.isRequired,
  deletePoint: PropTypes.func.isRequired,
  setMapCenter: PropTypes.func.isRequired,
  updatePoint: PropTypes.func.isRequired
};

export default connect(
  state => {
    return {
      pointList: state.map.pointList,
      mapCenter: state.map.mapCenter
    };
  },
  {
    addPoint,
    deletePoint,
    updatePoint,
    updateMapCenterByPointCoordinate,
    setMapCenter
  }
)(Main);
