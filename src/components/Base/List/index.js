import React from "react";
import PropTypes from "prop-types";
import style from "./style.scss";

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
  showDeleteIcon
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

export const handleItemList = (clickItem, id) => () => {
  if (typeof clickItem === "function" && typeof id === "string") {
    return clickItem(id);
  }
  return null;
};

export default function List({
  itemList,
  deleteItemAction,
  deleteText,
  showDeleteIcon,
  clickItem
}) {
  return (
    <ul className={style.containerList}>
      {itemList.map(item => (
        <li className={style.itemContainer} key={item.id}>
          <span
            onClick={handleItemList(clickItem, item.id)}
            className={style.itemClass}
          >
            {item.value}
          </span>
          <div className={style.deleteElementContainer}>
            {deleteItemFromList(
              deleteItemAction,
              deleteText,
              item.id,
              showDeleteIcon
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
List.defaultProps = {
  itemList: [],
  clickItem: null,
  deleteItemAction: null,
  showDeleteIcon: true,
  deleteText: "Удалить"
};

List.propTypes = {
  itemList: PropTypes.array,
  clickItem: PropTypes.func,
  showDeleteIcon: PropTypes.bool,
  deleteItemAction: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  deleteText: PropTypes.string
};
