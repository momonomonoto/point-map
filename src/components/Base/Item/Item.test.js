import React from "react";
import { mount, shallow } from "enzyme";
import Item from "./index";
import {
  deleteValueFromList,
  deleteItemFromList,
  setValueFromList,
  handleItemList
} from "./index";

const mockDeletePoint = jest.fn();
const deleteItemAction = jest.fn();
const mockDeleteValueFromList = jest.fn();
const clickItem = jest.fn();
const id = "id";
const showDeleteIcon = true;
const deleteText = "";
const className = "className";
const value = "value";

const mockProps = {
  deleteItemAction,
  itemList: [
    {
      id: "CHxFeM-l3",
      value: "valueProp1"
    },
    {
      id: "CHxFeM-345",
      value: "valueProp2"
    }
  ]
};

test("Mount component Item", () => {
  const listComponent = <Item {...mockProps} />;
  mount(listComponent);
});

test("Call deleteValueFromList without id and delete function", () => {
  const eventListValue = deleteValueFromList();
  expect(eventListValue()).toBe(null);
});

test("Call deleteValueFromList with id and delete function", () => {
  const eventListValue = deleteValueFromList(id, mockDeletePoint);
  eventListValue();
  expect(mockDeletePoint).toBeCalled();
});

test("Call deleteItemFromList. And return button element if delete parametrs is valid", () => {
  console.log(deleteItemFromList, "deleteItemFromList");
  const eventListValue = deleteItemFromList(
    deleteItemAction,
    deleteText,
    id,
    showDeleteIcon,
    mockDeleteValueFromList
  );
  mount(eventListValue);
});

test("Call deleteItemFromList.And return null if id is invalid", () => {
  const ivalidId = null;
  const eventListValue = deleteItemFromList(
    deleteItemAction,
    deleteText,
    ivalidId,
    showDeleteIcon,
    mockDeleteValueFromList
  );
  expect(eventListValue).toBe(null);
});

test("Call deleteItemFromList.And return null if deleteItemAction is invalid", () => {
  const deleteItemAction = null;
  const eventListValue = deleteItemFromList(
    deleteItemAction,
    deleteText,
    id,
    showDeleteIcon,
    mockDeleteValueFromList
  );
  expect(eventListValue).toBe(null);
});
test("Call deleteItemFromList.And return null if deleteValueFromList is invalid", () => {
  const invalidDeleteValueFromList = null;
  const eventListValue = deleteItemFromList(
    deleteItemAction,
    deleteText,
    id,
    showDeleteIcon,
    invalidDeleteValueFromList
  );
  expect(eventListValue).toBe(null);
});

test("Call handleItemList", () => {
  const eventClickAction = handleItemList(clickItem, id);
  eventClickAction();
  expect(clickItem).toBeCalled();
});

test("Call handleItemList with invalidId", () => {
  const invalidId = null;
  const eventClickAction = handleItemList(clickItem, invalidId);
  const resultEvent = eventClickAction();
  expect(resultEvent).toBe(null);
});

test("Return value element", () => {
  const invalidClickItem = null;
  const resultElementList = setValueFromList(className, value);
  shallow(resultElementList);
});

test("Return value element", () => {
  const invalidValue = null;
  const resultElementList = setValueFromList(className, invalidValue);
  expect(resultElementList).toBe(null);
});
