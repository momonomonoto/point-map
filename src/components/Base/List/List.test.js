import React from "react";
import { mount, shallow } from "enzyme";
import List from "./index";

const mockDeletePoint = jest.fn();
const deleteItemAction = jest.fn();
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

test("Mount component List", () => {
  const listComponent = <List {...mockProps} />;
  mount(listComponent);
});
