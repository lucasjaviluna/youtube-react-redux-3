import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import {UserListElement} from "../../src/components//UserListElement";
import expect from 'expect';

// unit tests for the UserListElement component
describe('UserListElement component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = {
        user: {
          id: 1,
          username: 'Lucas',
          job: 'aha'
        }
      };
      const wrapper = shallow(<UserListElement {...props} />);
      expect(wrapper.find('td').length).toBe(5);
      expect(wrapper.find('Button').length).toBe(2);
      // assert.equal(wrapper.length, 1);
    });
  });
});
