import React from "react";
import { shallow, mount } from "enzyme";
import assert from "assert";
import { App } from "../../src_users/components/App";
import expect from 'expect';

// unit tests for the App component
describe('App component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      // const props = {dispatch: ()=>{}, users: []};
      const props = {dispatch: ()=>{}, users: []};
      const wrapper = shallow(<App {...props}/>);
      // const wrapper = mount(<App {...props}/>);
      console.log(wrapper);
      //assert.equal(wrapper.length, 1);

      // const wrapper = shallow(<App/>);
      //assert.equal(wrapper.find('div[.container]').length, 1);
      // assert.equal(wrapper.find('.row').to.have.length, 2);
      // expect(wrapper.find('.row').length).toBe(1);

      // expect(wrapper.contains(<div class="row" />)).toBe(1);
      // expect(wrapper.find('div').hasClass('container')).toBe(true);
      // expect(wrapper.find('Menu').length).toBe(3);
    //   const wrapper = shallow(
    //   <p>
    //     <div className="unique" />
    //   </p>
    // );
     console.log(wrapper.contains(<div className="row"/>));
    // expect(wrapper.contains(<div className="unique" />)).toBe(true);
    });
  });
});
