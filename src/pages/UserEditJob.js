import React from 'react';
import {FormGroup, FormControl, InputGroup, Col, Glyphicon} from 'react-bootstrap';

export default class UserEditJob extends React.Component {
  static get propTypes() {
    return {
      input: React.PropTypes.object
    };
  }

  render() {
    return (
      <FormGroup>
        <Col sm={2}>Job</Col>
        <Col sm={8}>
          <InputGroup>
            <FormControl {...this.props.input} id="job" type="text" placeholder="Job" />
            <InputGroup.Addon>
              <Glyphicon glyph="briefcase"/>
            </InputGroup.Addon>
          </InputGroup>
        </Col>
      </FormGroup>
    );
  }
}
