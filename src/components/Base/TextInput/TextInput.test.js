import React from "react";
import TextInput from "./index";
import { mount } from "enzyme";
import sinon from "sinon";

const addValue = sinon.spy();
const value = "test";

const mockProps = {
  descriptionText: "descriptionText",
  addValue,
  className: "className"
};

const formComponent = mount(<TextInput {...mockProps} />);
const input = formComponent.find("input");

describe("Base TextInput component", () => {
  test("Render component form", () => {
    mount(<TextInput {...mockProps} />);
  });

  test("Update state from input value", () => {
    input.simulate("change", { target: { value } });
    expect(formComponent.state().itemValue).toEqual(value);
  });

  test("Show validation error", () => {
    formComponent.setState({ validationError: true });
    const formContainError = formComponent.contains(
      <div id="validationError">Заполните поле</div>
    );
    expect(formContainError).toEqual(true);
  });

  test("Add new value in state", () => {
    input.simulate("change", { target: { value } });
    input.simulate("keyPress", { key: "Enter" });
    const calledAddFunction = addValue.called;
    expect(calledAddFunction).toEqual(true);
  });
});
