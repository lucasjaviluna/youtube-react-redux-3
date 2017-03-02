
import {reducerCall} from './index';

export default function users(state = {}, action) {
  return reducerCall(state, action, reducerClass);
  // let newState;
  // switch (action.type) {
  //   case 'users.modalDeleteShow':
  //     newState = JSON.parse(JSON.stringify(state));
  //     newState.modal = newState.modal ? newState.modal : {};
  //     newState.modal.list_delete = {
  //       show: true,
  //       id: action.id,
  //       username: action.username
  //     };
  //     return newState;
  //     break;
  //   case 'users.modalDeleteHide':
  //     newState = JSON.parse(JSON.stringify(state));
  //     newState.modal.list_delete = {
  //       show: false,
  //       id: 0,
  //       username: ''
  //     };
  //     return newState;
  //     break;
  //   case 'users.delete':
  //     newState = JSON.parse(JSON.stringify(state));
  //     for (const index in newState.list) {
  //       if (newState.list[index].id === action.id) {
  //         newState.list.splice(index, 1);
  //         break;
  //       }
  //     }
  //
  //     return newState;
  //     break;
  //   default:
  //     return state;
  // }
}

class reducerClass {
  static modalDeleteShow(newState, action)
  {
    newState.modal = newState.modal ? newState.modal : {};
    newState.modal.list_delete = {
      show: true,
      id: action.id,
      username: action.username
    };
    return newState;
  }

  static modalDeleteHide(newState, action)
  {
    newState.modal.list_delete = {
      show: false,
      id: 0,
      username: ''
    };
    return newState;
  }

  static delete(newState, action)
  {
    for (const index in newState.list) {
      if (newState.list[index].id === action.id) {
        newState.list.splice(index, 1);
        break;
      }
    }

    return newState;
  }

  static add(newState, action)
  {
    const id = Number((Math.random() * 1000000).toPrecision(6));
    newState.list.push({
      id: id,
      username: action.username,
      job: action.job
    });

    return newState;
  }

  static edit(newState, action)
  {
    for (const user of newState.list) {
      if (user.id === action.id) {
        Object.assign(user, {
          username: action.username,
          job: action.job
        });
        break;
      }
    }

    return newState;
  }
}
