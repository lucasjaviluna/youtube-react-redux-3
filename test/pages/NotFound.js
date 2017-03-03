import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import NotFound from "../../src/pages/NotFound";
import expect from 'expect';

// unit tests for the NotFound component
describe('NotFound component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const wrapper = shallow(<NotFound/>);
      expect(wrapper.find('h4').length).toBe(1);
      expect(wrapper.find('h4').children().text()).toBe('Page not found!');
      // assert.equal(wrapper.length, 1);
    });
  });
});
