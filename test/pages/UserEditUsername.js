import React from "react";
import { shallow, mount } from "enzyme";
import assert from "assert";
import UserEditUsername from "../../src/pages/UserEditUsername";
import expect from 'expect';

// unit tests for the UserEdit component
describe('UserEditUsername component', () => {
  describe('render()', () => {
    it('should render the component in the initial State', () => {
      const props = {
        meta: {
          touched: false
        },
        input: {}
      };
      const wrapper = shallow(<UserEditUsername {...props} />);
      expect(wrapper.find('FormGroup').length).toBe(1);
      expect(wrapper.find('FormGroup').prop('validationState')).toBe(null);
      expect(wrapper.find('HelpBlock').children().length).toBe(0);
    });

    it('should render the component in the error state', () => {
      const props = {
        meta: {
          touched: true,
          error: 'Required'
        },
        input: {}
      };
      const wrapper = shallow(<UserEditUsername {...props} />);
      expect(wrapper.find('FormGroup').length).toBe(1);
      expect(wrapper.find('FormGroup').prop('validationState')).toBe('error');
      expect(wrapper.find('HelpBlock').children().text()).toBe('Required');
      // assert.equal(wrapper.length, 1);
    });

    it('should render the component in the success state', () => {
      const props = {
        meta: {
          touched: true
        },
        input: {}
      };
      const wrapper = shallow(<UserEditUsername {...props} />);
      expect(wrapper.find('FormGroup').length).toBe(1);
      expect(wrapper.find('FormGroup').prop('validationState')).toBe('success');
      expect(wrapper.find('HelpBlock').children().length).toBe(0);
      // assert.equal(wrapper.length, 1);
    });
  });
});
