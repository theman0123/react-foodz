import React, { Component } from 'react';

import NoteCards from './NoteCards.js';
import MNotesM from '../mnotesm/MNotesM.js';
import MNForM from './mnform/MNForM.js';

import text from 'bootstrap-css-modules/css/text.css';
import myStyles from '../../myStyles.css';

const newNote = `${text.textCenter} ${myStyles.textMd}`;

export default class NoteView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: {
        title: 'Hamburger',
        description: 'omg this was the best hamburger ever. get xtra sauce it\'s the best',
        stars: 5,
        image: 'http://www.inspiredtaste.net/wp-content/uploads/2016/08/Easy-Homemade-Hamburger-Recipe-2-1200.jpg',
        likes: 15,
        placeName: 'Chilis',
      },
      showNote: false,
      showForm: false,
      newNoteTitle: '',
    };
  }

  openNote() {
    this.setState({ showNote: true });
  }

  closeNote() {
    this.setState({ showNote: false });
  }

  openForm() {
    this.setState({ showForm: true });
  }

  closeForm() {
    this.setState({ showForm: false });
  }
  
  handleChange(e) {
    this.setState({ newNoteTitle: e.target.value });
  }

  render() {
    return (
      <div>
        <div onClick={this.openNote.bind(this)}>
          <NoteCards
            title={this.state.note.title}
            description={this.state.note.description}
            stars={this.state.note.stars}
          />
        </div>

        <MNotesM
          show={this.state.showNote}
          close={this.closeNote.bind(this)}

          likes={this.state.note.likes}
          placeName={this.state.note.placeName}
          stars={this.state.note.stars}
          title={this.state.note.title}
          description={this.state.note.description}
          image={this.state.note.image}
        />


        <div className={newNote} onClick={this.openForm.bind(this)}>
          New Note
        </div>

        <MNForM
          showForm={this.state.showForm}
          close={this.closeForm.bind(this)}
          newNoteTitle={this.state.newNoteTitle}
          onChange={(e) => this.handleChange(e)}
        />

      </div>
    );
  }
};
