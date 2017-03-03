import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import Home from "../../src/pages/Home";
import expect from 'expect';

// unit tests for the Home component
describe('Home component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const wrapper = shallow(<Home/>);
      expect(wrapper.find('div').length).toBe(1);
      // assert.equal(wrapper.length, 1);
    });
  });
});
