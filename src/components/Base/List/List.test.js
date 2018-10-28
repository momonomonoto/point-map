import React from "react";
import { mount, shallow } from "enzyme";
import List, {
  onSortEnd,
  getSortableItem,
  getSortableList,
  generatePropertyList
} from "./index";
import Item from "../Item";
import sinon from "sinon";

const itemList = [];
const mockSortDataIndex = { oldIndex: 0, newIndex: 1 };
const onDragItemEvent = jest.fn();
const arrayMove = jest.fn();
const itemWrapper = sinon.spy();
const sortableElement = jest.fn();
const sortableItem = jest.fn();
const sortableContainer = jest.fn();

const additionPropertyData = {};

const mockProps = {
  itemList: [],
  onDragItemEvent: null,
  itemWrapper,
  clickItem: null,
  deleteItemAction: null,
  showDeleteIcon: true,
  sortable: false,
  deleteText: "Удалить"
};

describe("Base List component", () => {
  test("Mount component List", () => {
    const listComponent = <List {...mockProps} />;
    mount(listComponent);
  });

  test("Called onSortEnd", () => {
    const eventSort = onSortEnd(itemList, onDragItemEvent, arrayMove);
    const resultSort = eventSort({ ...mockSortDataIndex });
    expect(onDragItemEvent).toBeCalled();
  });

  test("Called onSortEnd with invalid itemList", () => {
    const ivalIdItemList = null;
    const eventSort = onSortEnd(ivalIdItemList, onDragItemEvent, arrayMove);
    const resultSort = eventSort({ ...mockSortDataIndex });
    expect(resultSort).toBe(null);
  });

  test("Called onSortEnd with invalid OnDragItemEvent", () => {
    const ivalidOnDragItemEvent = null;
    const eventSort = onSortEnd(itemList, ivalidOnDragItemEvent, arrayMove);
    const resultSort = eventSort({ ...mockSortDataIndex });
    expect(resultSort).toBe(null);
  });

  test("Called onSortEnd with invalid arrayMove", () => {
    const ivalidArrayMove = null;
    const eventSort = onSortEnd(itemList, onDragItemEvent, ivalidArrayMove);
    const resultSort = eventSort({ ...mockSortDataIndex });
    expect(resultSort).toBe(null);
  });

  test("Called getSortableItem", () => {
    const resultSortable = getSortableItem(itemWrapper, sortableElement);
    expect(sortableElement).toBeCalled();
  });

  test("Called getSortableItem with invalid itemWrapper", () => {
    const itemWrapper = null;
    const resultSortable = getSortableItem(itemWrapper, sortableElement);
    expect(resultSortable).toBe(null);
  });

  test("Called getSortableItem with invalid sortableElement", () => {
    const ivalidSortableElement = null;
    const resultSortableItem = getSortableItem(
      itemWrapper,
      ivalidSortableElement
    );
    expect(resultSortableItem).toBe(null);
  });

  test("Called getSortableList", () => {
    const resultSortableList = getSortableList(sortableItem, sortableContainer);
    expect(sortableContainer).toBeCalled();
  });

  test("Called getSortableList with invalid sortableItem", () => {
    const ivalidSortableItem = null;
    const resultSortableList = getSortableList(
      ivalidSortableItem,
      sortableContainer
    );
    expect(resultSortableList).toBe(null);
  });

  test("Called getSortableList with invalid sortableContainer", () => {
    const ivalidSortableContainer = null;
    const resultSortableList = getSortableList(
      sortableItem,
      ivalidSortableContainer
    );
    expect(resultSortableList).toBe(null);
  });

  test("Called generatePropertyList", () => {
    const resultSortableList = generatePropertyList(
      itemList,
      additionPropertyData
    );
    expect(resultSortableList).toEqual(itemList);
  });

  test("Called generatePropertyList with ivalid item list", () => {
    const invalidItemList = null;
    const resultSortableList = generatePropertyList(
      invalidItemList,
      additionPropertyData
    );
    expect(resultSortableList).toBe(null);
  });

  test("Called generatePropertyList with ivalid additionPropertyData", () => {
    const invalidAdditionPropertyData = null;
    const resultSortableList = generatePropertyList(
      itemList,
      invalidAdditionPropertyData
    );
    expect(resultSortableList).toBe(null);
  });
});
