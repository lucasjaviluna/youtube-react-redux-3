// import React from "react";
// import { shallow, mount } from "enzyme";
// import assert from "assert";
// import { UserEdit } from "../../src/pages/UserEdit";
// import expect from 'expect';
//
// // unit tests for the UserEdit component
// describe('UserEdit component', () => {
//   describe('render()', () => {
//     it('should render the add user form', () => {
//       const props = {
//         initialValues: {
//           id: 0
//         },
//         invalid: true,
//         submitting: true,
//         handleSubmit: ()=>{}
//       };
//       const wrapper = shallow(<UserEdit {...props} />);
//       //console.log(wrapper.find('form'));
//       expect(wrapper.find('Form').length).toBe(1);
//       // expect(wrapper.find('PageHeader').text()).toBe('User add');
//       // expect(wrapper.find('Button').props('disabled')).toBe(true);
//       // assert.equal(wrapper.length, 1);
//     });
//
//     it('should render the edit user form', () => {
//       const props = {
//         initialValues: {
//           id: 1
//         },
//         invalid: false,
//         submitting: false,
//         handleSubmit: ()=>{}
//       };
//       const wrapper = shallow(<UserEdit {...props} />);
//       // console.log(wrapper.find('PageHeader'));
//       // expect(wrapper.find('PageHeader').text()).toBe('User edit');
//       expect(wrapper.find('Button').props('disabled')).toBe(false);
//       // assert.equal(wrapper.length, 1);
//     });
//   });
// });
