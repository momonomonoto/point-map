import React from "react";
import PropTypes from "prop-types";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { arrayMove } from "react-sortable-hoc";
import style from "./style.scss";
import Item from "../Item";

export const onSortEnd = (itemList, onDragItemEvent, arrayMove) => ({
  oldIndex,
  newIndex
}) => {
  if (
    Array.isArray(itemList) &&
    typeof onDragItemEvent === "function" &&
    typeof onDragItemEvent === "function"
  ) {
    const newList = arrayMove(itemList, oldIndex, newIndex);
    return onDragItemEvent(newList);
  }
  return null;
};

export const getSortableItem = (itemWrapper, SortableElement) =>
  SortableElement(({ ...itemProps }) => {
    if (
      typeof itemWrapper === "function" &&
      typeof SortableElement === "function"
    ) {
      return itemWrapper({ ...itemProps });
    }
    return null;
  });

export const getSortableList = (SortableItem, SortableContainer) =>
  SortableContainer(({ items }) => {
    if (typeof SortableItem === "function") {
      return (
        <ul className={style.containerList}>
          {items.map(sortableItemProperty => {
            return <SortableItem {...sortableItemProperty} />;
          })}
        </ul>
      );
    }
    return null;
  });

export const generatePropertyList = (itemList, additionPropertyData = {}) => {
  if (Array.isArray(itemList)) {
    const propertyList = itemList.map((item, index) => ({
      value: item.value,
      key: item.id,
      id: item.id,
      index,
      ...additionPropertyData
    }));
    return propertyList;
  }
  return null;
};

export default function List({
  itemList,
  deleteItemAction,
  deleteText,
  showDeleteIcon,
  itemWrapper,
  sortable,
  onDragItemEvent,
  clickItem
}) {
  const propertyItemList = generatePropertyList(itemList, {
    clickItem,
    deleteItemAction,
    deleteText,
    showDeleteIcon,
    sortable
  });

  if (sortable) {
    const SortableItem = getSortableItem(itemWrapper, SortableElement);
    const SortableList = getSortableList(SortableItem, SortableContainer);

    return (
      <SortableList
        items={propertyItemList}
        onSortEnd={onSortEnd(itemList, onDragItemEvent, arrayMove)}
      />
    );
  }
  const itemListWithoutSortable = itemList.map((item, index) => {
    return itemWrapper({ ...propertyItemList[index] });
  });

  return <ul className={style.containerList}>{itemListWithoutSortable}</ul>;
}

List.defaultProps = {
  itemList: [],
  itemWrapper: Item,
  clickItem: null,
  deleteItemAction: null,
  showDeleteIcon: true,
  sortable: false,
  deleteText: "Удалить"
};

List.propTypes = {
  itemList: PropTypes.array,
  itemWrapper: PropTypes.node,
  clickItem: PropTypes.func,
  onDragItemEvent: PropTypes.func,
  showDeleteIcon: PropTypes.bool,
  sortable: PropTypes.bool,
  deleteItemAction: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  deleteText: PropTypes.string
};
