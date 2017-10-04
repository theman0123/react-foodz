import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Modal, form, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

import display from 'bootstrap-css-modules/css/display.css';
import flex from 'bootstrap-css-modules/css/flex.css';
import myStyles from '../../../myStyles.css';

const modalBS = `${display.dFlex} ${flex.flexColumn} ${myStyles.backgroundRed}`;

export default class MNForM extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newNoteTitle: '',
    };

  }

  handleChange(e) {
    this.setState({newNoteTitle: e.target.value});
  }
  
  saveNote(e) {
    console.log('NoteSaved');
  }
  
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
      <Modal
          show={this.props.showForm} onHide={this.props.close}
        >

          <Modal.Header className={myStyles.backgroundGrey}closeButton>

            <Modal.Title>
              {this.state.newNoteTitle}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className={modalBS}>
            <form>
              <FormGroup
                controlId="formControlsPlaceName"
              />

              <ControlLabel>Note Title</ControlLabel>

              <FormControl
                type="text"
                placeholder="Chicken Tacos"
                value={this.state.newNoteTitle}
                onChange={(e) => {this.handleChange(e)}}
              />

              <FieldGroup
                id="formControlsNoteDescription"
                type="text"
                componentClass="textarea"
                label="Food Details"
                placeholder="remember xtra sauce!!"
              />

              <Button bsStyle="success" onClick={this.saveNote.bind(this)}>
                Save
              </Button>
            </form>
          </Modal.Body>

      </Modal>
    );
  };
}

MNForM.propTypes = {
  showForm: PropTypes.bool,
  close: PropTypes.func,
};
