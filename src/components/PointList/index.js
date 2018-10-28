import React from "react";
import PropTypes from "prop-types";
import List from "../Base/List";
import Item from "../Base/Item";
import TextInput from "../Base/TextInput";
import style from "./style.scss";

export default function PointList({
  pointList,
  addPoint,
  deletePoint,
  setPointList,
  className,
  clickPoint
}) {
  return (
    <div className={className}>
      <TextInput
        className={style.searchInput}
        addValue={addPoint}
        descriptionText="Новая геоточка"
      />
      <List
        itemList={pointList}
        clickItem={clickPoint}
        onDragItemEvent={setPointList}
        itemWrapper={Item}
        deleteItemAction={deletePoint}
        sortable
      />
    </div>
  );
}

PointList.propTypes = {
  pointList: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  deletePoint: PropTypes.func.isRequired,
  setPointList: PropTypes.func.isRequired,
  clickPoint: PropTypes.func,
  addPoint: PropTypes.func.isRequired
};
