import React from "react";
import PropTypes from "prop-types";
import style from "../List/style.scss";
import getPoint from "./getPoint.svg";

export const handleItemList = (clickItem, id) => () => {
  if (typeof clickItem === "function" && typeof id === "string") {
    return clickItem(id);
  }
  return null;
};

export function setValueFromList(className, value, handleClickItem) {
  if (typeof value === "string" || typeof value === "number") {
    return (
      <div role="note" className={className}>
        <div>{value}</div>
        <input
          onClick={handleClickItem}
          className={style.baseLine}
          type="image"
          src={getPoint}
        />
      </div>
    );
  }
  return null;
}

export const deleteValueFromList = (id, deleteItemAction) => () => {
  if (id) {
    return deleteItemAction(id);
  }
  return null;
};

export const deleteItemFromList = (
  deleteItemAction,
  deleteText,
  id,
  showDeleteIcon,
  deleteValueFromList
) => {
  const isValidDeleteParam = typeof deleteItemAction === "function" && id;
  const elemLabel = showDeleteIcon ? "X" : deleteText;
  const deleteProp = {
    className: style.deleteButton,
    onClick: deleteValueFromList(id, deleteItemAction)
  };
  if (isValidDeleteParam) {
    return <button {...deleteProp}>{elemLabel}</button>;
  }
  return null;
};

export default function Item({
  clickItem,
  value,
  id,
  deleteItemAction,
  deleteText,
  showDeleteIcon
}) {
  const handleClickItem = handleItemList(clickItem, id);
  return (
    <li className={style.itemContainer} key={id}>
      <div className={style.valueElementContainer}>
        {setValueFromList(style.itemClass, value, handleClickItem)}
      </div>
      <div className={style.deleteElementContainer}>
        {deleteItemFromList(
          deleteItemAction,
          deleteText,
          id,
          showDeleteIcon,
          deleteValueFromList
        )}
      </div>
    </li>
  );
}

Item.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  deleteText: PropTypes.string,
  clickItem: PropTypes.func,
  deleteItemAction: PropTypes.func,
  showDeleteIcon: PropTypes.bool
};

Item.defaultProps = {
  value: "",
  id: "",
  deleteText: "",
  showDeleteIcon: true,
  clickItem: () => {},
  deleteItemAction: () => {}
};
