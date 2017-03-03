import React from "react";
import { shallow, mount } from "enzyme";
import assert from "assert";
import App from "../../src/components/App";
import expect from 'expect';

// unit tests for the App component
describe('App component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.find(".container").length).toBe(1);
      expect(wrapper.find(".row").length).toBe(2);
    });
  });
});
