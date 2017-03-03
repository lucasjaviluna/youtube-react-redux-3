import React from "react";
import { shallow, mount } from "enzyme";
import assert from "assert";
import {UserDelete} from "../../src/components/UserDelete";
import expect from 'expect';

// unit tests for the App component
describe('UserDelete component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = {
        modal_delete: {
          show: false,
          id: 0,
          username: ''
        }
      };
      const wrapper = shallow(<UserDelete {...props}/>);
      expect(wrapper.find('Modal').length).toBe(1);
      expect(wrapper.find('Button').length).toBe(2);
    });
  });
});
