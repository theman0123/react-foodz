import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { form, FormGroup, ControlLabel, FormControl, HelpBlock, Button, Checkbox, Radio } from 'react-bootstrap';

export default class FormBody extends Component {
  
  render() {
    const FieldGroup = ({ id, label, help, ...props }) =>{
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      );
    };
    
    return (
      <form>
        <FormGroup
          controlId="formControlsPlaceName"
        />

        <ControlLabel>Note Title</ControlLabel>

        <FormControl
          type="text"
          placeholder="Chicken Tacos"
          value={this.props.newNoteTitle}
          onChange={this.props.onChange}
        />

        <FieldGroup
          id="formControlsNoteDescription"
          type="text"
          componentClass="textarea"
          label="Food Details"
          placeholder="remember xtra sauce!!"
        />
        <FieldGroup
          id="formControlsPhoto"
          type="file"
          label="Add Photo"
        />
      
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Stars</ControlLabel>
          <FormControl componentClass="select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </FormControl>
        </FormGroup>
      
        <Checkbox unchecked readOnly>
          Private
        </Checkbox>
      </form>
    );
  }
};
