import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Modal, form, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

import display from 'bootstrap-css-modules/css/display.css';
import flex from 'bootstrap-css-modules/css/flex.css';

import myStyles from '../../myStyles.css';

const modalBS = `${display.dFlex} ${flex.flexColumn} ${myStyles.backgroundRed}`;

export default class MRForM extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPlaceName: '',
    };

  }

  handleChange(e) {
    this.setState({newPlaceName: e.target.value});
  }
  
  savePlace(e) {
    console.log('SavedPlace')
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
              {this.state.newPlaceName}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className={modalBS}>
            <form>
              <FormGroup
                controlId="formControlsPlaceName"
              />

              <ControlLabel>Place Name</ControlLabel>

              <FormControl
                type="text"
                placeholder="Tom's Taco Shop"
                value={this.state.newPlaceName}
                onChange={(e) => this.handleChange(e)}
              />

              <FieldGroup
                id="formControlsPlaceAddress"
                type="text"
                componentClass="textarea"
                label="Place Address"
                placeholder="optional"
              />

              <Button bsStyle="success" onClick={this.savePlace.bind(this)}> Save </Button>

            </form>
          </Modal.Body>

      </Modal>
    );
  };
}

MRForM.propTypes = {
  showForm: PropTypes.bool,
  close: PropTypes.func,
};
