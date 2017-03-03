import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import Menu from "../../src/components/Menu";
import expect from 'expect';
// unit tests for the Menu component
describe('Menu component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const wrapper = shallow(<Menu/>);
      expect(wrapper.find('IndexLinkContainer').length).toBe(1);
      expect(wrapper.find('LinkContainer').length).toBe(1);
      expect(wrapper.find('NavItem').length).toBe(2);
      //assert.equal(wrapper.length, 1);
    });
  });
});
