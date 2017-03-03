import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router';

export class UserListElement extends React.Component {
  constructor(props) {
    super(props);

    this.modalDeleteShow = this.modalDeleteShow.bind(this);
  }

  static get propTypes()
  {
    return {
      user: React.PropTypes.object.isRequired
    };
  }

  modalDeleteShow(event) {
    const user_id = Number(event.target.dataset.id);
    const username = event.target.dataset.username;
    this.props.dispatch({
      type: 'users.modalDeleteShow',
      id: user_id,
      username: username
    });
  }

  render() {
    const user = this.props.user;
    return (
      <tr>
        <td>#{user.id}</td>
        <td>{user.username}</td>
        <td>{user.job}</td>
        <td>
          <Link to={'/user-edit/' + user.id}>
            <Button bsSize="xsmall">
              Edit <Glyphicon glyph="edit"/>
            </Button>
          </Link>
        </td>
        <td>
          <Button bsSize="xsmall" data-id={user.id} data-username={user.username}
            onClick={this.modalDeleteShow}>
            Delete <Glyphicon glyph="remove-circle"/>
          </Button>
        </td>
      </tr>
    );
  }
}

// UserListElement.propTypes = {
//   user: React.PropTypes.object.isRequired
// }

export default connect()(UserListElement);
