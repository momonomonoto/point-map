import React from "react";
import { mount } from "enzyme";
import Bar from "./index";

const mockProps = {
  title: "Title"
};

describe("Base Bar component", () => {
  test("Mount component Bar", () => {
    const listComponent = <Bar {...mockProps} />;
    mount(listComponent);
  });
});
