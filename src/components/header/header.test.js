import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAtrr } from "../../../utils";
const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "logoIMG");
    expect(wrapper.length).toBe(1);
  });
});
