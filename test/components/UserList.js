import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import { UserList } from "../../src/components/UserList";
import expect from 'expect';

// unit tests for the UserList component
describe('UserList component', () => {
  describe('render()', () => {
    it('should render the progressbar', () => {
      const props = {
        page: 1,
        users: [],
        dispatch: () => {}
      };
      const wrapper = shallow(<UserList {...props} />);
      expect(wrapper.find('ProgressBar').length).toBe(1);
      //assert.equal(wrapper.length, 1);
    });

    it('should render the user list', () => {
      const props = {
        page: 1,
        users: [
          {
            id: 1,
            username: 'Lucas',
            job: 'CEO'
          }
        ]
      };
      const wrapper = shallow(<UserList {...props} />);
      expect(wrapper.find('Table').length).toBe(1);
      expect(wrapper.find('Pagination').length).toBe(1);
      //assert.equal(wrapper.length, 1);
    });
  });
});
