import assert from "assert";
import users from "../../src/reducers/users";

describe('Users reducer', () => {
  describe('add', () => {
    it('should return a new user array element', () => {
      const state = {
        list: [
          {
            id: 1,
            username: 'Lucas',
            job: 'job'
          }
        ]
      };

      const action = {
        type: 'users.add',
        id: 2,
        username: 'Lucas 2',
        job: 'job 2'
      };

      const expected = {
        list: [
                {
                  id: 1,
                  username: 'Lucas',
                  job: 'job'
                },
                {
                  id: 2,
                  username: 'Lucas 2',
                  job: 'job 2'
                }
              ]
      };

      assert.deepEqual(users(state, action), expected);
    })
  });

  describe('edit', () => {
    it('should return an edited user array element', () => {
      const state = {
        list: [
          {
            id: 1,
            username: 'Lucas',
            job: 'job'
          },
          {
            id: 2,
            username: 'Pepito',
            job: 'jobPepito'
          }
        ]
      };

      const action = {
        type: 'users.edit',
        id: 2,
        username: 'Lucas 2',
        job: 'job 2'
      };

      const expected = {
        list: [
                {
                  id: 1,
                  username: 'Lucas',
                  job: 'job'
                },
                {
                  id: 2,
                  username: 'Lucas 2',
                  job: 'job 2'
                }
              ]
      };

      assert.deepEqual(users(state, action), expected);
    })
  });

  describe('modalDeleteShow', () => {
    it('should set the list_delete data when its undefined', () => {
      const state = { };
      const action = {
        type: 'users.modalDeleteShow',
        id: 2,
        username: 'Lucas 2'
      };

      const expected = {
        modal: {
          list_delete: {
            show: true,
            id: 2,
            username: 'Lucas 2'
          }
        }
      };

      assert.deepEqual(users(state, action), expected);
    });

    it('should set the list_delete data when it exists', () => {
      const state = {
        modal: {
          list_delete: {
            show: true,
            id: 2,
            username: 'Lucas 2'
          }
        }
      };

      const action = {
        type: 'users.modalDeleteShow',
        id: 2,
        username: 'Lucas 2'
      };

      const expected = {
        modal: {
          list_delete: {
            show: true,
            id: 2,
            username: 'Lucas 2'
          }
        }
      };

      assert.deepEqual(users(state, action), expected);
    });
  });

  describe('modalDeleteHide', () => {
    it('should set the list_delete data', () => {
      const state = {
        modal: {
          list_delete: {
            show: true,
            id: 2,
            username: 'Lucas 2'
          }
        }
      };

      const action = {
        type: 'users.modalDeleteHide'
      };

      const expected = {
        modal: {
          list_delete: {
            show: false,
            id: 0,
            username: ''
          }
        }
      };

      assert.deepEqual(users(state, action), expected);
    });
  });

  describe('delete', () => {
    it('should return the user array without the deleted element', () => {
      const state = {
        list: [
                {
                  id: 1,
                  username: 'Lucas',
                  job: 'job'
                },
                {
                  id: 2,
                  username: 'Lucas 2',
                  job: 'job 2'
                }
              ]
      };

      const action = {
        type: 'users.delete',
        id: 2
      };

      const expected = {
        list: [
                {
                  id: 1,
                  username: 'Lucas',
                  job: 'job'
                }
              ]
      };

      assert.deepEqual(users(state, action), expected);
    });
  });

  describe('fetchListSuccess', () => {
    it('should return a list of users', () => {
      const state = {};

      const action = {
        type: 'users.fetchListSuccess',
        users: [
          {
            id: 1,
            username: 'Lucas',
            job: 'job'
          }
        ]
      };

      const expected = {
        list: [
                {
                  id: 1,
                  username: 'Lucas',
                  job: 'job'
                }
              ]
      };

      assert.deepEqual(users(state, action), expected);
    });
  });
});


//
// // unit tests for the users reducers
// // mocha - http://mochajs.org/#getting-started
// // assert - https://nodejs.org/api/assert.html#assert_assert_deepequal_actual_expected_message
// describe('Users reducer', () => {
//   describe('USERS_LIST_SAVE', () => {
//     it('should return a list of users', () => {
//       assert.deepEqual(
//         users({}, {
//           type: 'USERS_LIST_SAVE',
//           users: [{
//             id: 1,
//             username: 'Some name',
//             job: 'Some job',
//           }],
//         }), [{
//           id: 1,
//           username: 'Some name',
//           job: 'Some job',
//         }]
//       );
//     });
//   });
//
//   describe('USERS_ADD_SAVE', () => {
//     it('should return a new user array element', () => {
//       assert.deepEqual(
//         users([{
//           id: 1,
//           username: 'Some name',
//           job: 'Some job',
//         }], {
//           type: 'USERS_ADD_SAVE',
//           user: {
//             id: 2,
//             username: 'Other name',
//             job: 'Other job',
//           },
//         }), [{
//           id: 1,
//           username: 'Some name',
//           job: 'Some job',
//         }, {
//           id: 2,
//           username: 'Other name',
//           job: 'Other job',
//         }]
//       );
//     });
//   });
//
//   describe('USERS_EDIT_SAVE', () => {
//     it('should return an edited user array element', () => {
//       assert.deepEqual(
//         users([{
//           id: 1,
//           username: 'Some name',
//           job: 'Some job',
//         }, {
//           id: 2,
//           username: 'Other name',
//           job: 'Other job',
//         }], {
//           type: 'USERS_EDIT_SAVE',
//           user: {
//             id: 2,
//             username: 'Changed name',
//             job: 'Changed job',
//           },
//         }), [{
//           id: 1,
//           username: 'Some name',
//           job: 'Some job',
//         }, {
//           id: 2,
//           username: 'Changed name',
//           job: 'Changed job',
//         }]
//       );
//     });
//   });
//
//   describe('USERS_DELETE_SAVE', () => {
//     it('should return the user array without the deleted element', () => {
//       assert.deepEqual(
//         users([{
//           id: 1,
//           username: 'Some name',
//           job: 'Some job',
//         }, {
//           id: 2,
//           username: 'Other name',
//           job: 'Other job',
//         }], {
//           type: 'USERS_DELETE_SAVE',
//           user_id: 2,
//         }), [{
//           id: 1,
//           username: 'Some name',
//           job: 'Some job',
//         }]
//       );
//     });
//   });
// });
