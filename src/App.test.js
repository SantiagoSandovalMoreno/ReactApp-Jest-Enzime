import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "./../utils";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Example Title 1",
          body: "Some Test"
        },
        {
          title: "Example Title 2",
          body: "Some Test"
        },
        {
          title: "Example Title 3",
          body: "Some Test"
        }
      ]
    };
    wrapper = setUp(initialState);
  });
  it("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "appComponent");
    expect(component.length).toBe(0);
  });
});
