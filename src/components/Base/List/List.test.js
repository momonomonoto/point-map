import React from "react";
import { mount } from "enzyme";
import List, {
  deleteValueFromList,
  deleteItemFromList,
  handleItemList
} from "./index";

const mockDeletePoint = jest.fn();
const deleteItemAction = jest.fn();
const clickItem = jest.fn();
const id = "id";
const showDeleteIcon = true;
const deleteText = "";

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

test("Mount component List", () => {
  const listComponent = <List {...mockProps} />;
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
  const eventListValue = deleteItemFromList(
    deleteItemAction,
    deleteText,
    id,
    showDeleteIcon
  );
  mount(eventListValue);
});

test("Call deleteItemFromList.And return null if id is invalid", () => {
  const ivalidId = null;
  const eventListValue = deleteItemFromList(
    deleteItemAction,
    deleteText,
    ivalidId,
    showDeleteIcon
  );
  expect(eventListValue).toBe(null);
});

test("Call deleteItemFromList.And return null if deleteItemAction is invalid", () => {
  const deleteItemAction = null;
  const eventListValue = deleteItemFromList(
    deleteItemAction,
    deleteText,
    id,
    showDeleteIcon
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

test("Call handleItemList with clickItem", () => {
  const invalidClickItem = null;
  const eventClickAction = handleItemList(invalidClickItem, id);
  const resultEvent = eventClickAction();
  expect(resultEvent).toBe(null);
});
