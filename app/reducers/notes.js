import update from 'immutability-helper';

const notes = (state={
  byId: {},
  allNotes: []
}, action) => {
  switch(action.type) {
    case 'NEW_NOTE': {
      let newNote = update(state, {
        byId:{
          [action.id]: {
            $set: {
              id: action.id,
              placeId: action.placeId,
              title: action.title,
              foodDetails: action.foodDetails,
              show: action.show,
              likes: action.likes,
              stars: action.stars,
              photo: action.photo,
              tags: action.tags}}},
        allNotes: {$push: [action.id]}});
      return newNote;
    }
      case 'DELETE_NOTE': {
        return update(state, {
          byId:{
            [action.id]: { $set: null }},
          allNotes: {
            $apply: allNotes => allNotes.filter(note => note !== action.id)
          }
        });
      }
    default: return state;
  }
}

export default notes;