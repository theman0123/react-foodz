import React, { Component } from 'react';

import NoteCards from './NoteCards.js';
import MNotesM from '../mnotesm/MNotesM.js';

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
      showModal: false
    };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <div onClick={this.open.bind(this)}>
          <NoteCards
            title={this.state.note.title}
            description={this.state.note.description}
            stars={this.state.note.stars}
          />
        </div>

        <MNotesM
          show={this.state.showModal}
          close={this.close.bind(this)}

          likes={this.state.note.likes}
          placeName={this.state.note.placeName}
          stars={this.state.note.stars}
          title={this.state.note.title}
          description={this.state.note.description}
          image={this.state.note.image}
        />
      </div>
    );
  }
};
