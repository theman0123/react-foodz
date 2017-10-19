import update from 'immutability-helper';

const notes = (state={
  byId: {},
  allNotes: []
}, action) => {
  switch(action.type) {
    case 'NEW_NOTE': {
      return update(state, {
        byId:{
          [action.id]: {
            $set: {
              id: action.id,
              placeId: action.placeId,
              ownerId: action.ownerId,
              title: action.title,
              foodDetails: action.foodDetails,
              show: action.show,
              likes: action.likes,
              stars: action.stars,
              photo: action.photo,
              tags: action.tags}}},
        allNotes: {$push: [action.id]}});
    }
    case 'EDIT_NOTE': {
      let findOwner = state.byId[action.id].ownerId === action.userId;
      if (findOwner) {
        return update(state, {
          byId: {
            [action.id]: {
              $set: {
                id: action.id,
                placeId: action.placeId,
                ownerId: action.ownerId,
                title: action.title,
                foodDetails: action.foodDetails,
                show: action.show,
                likes: action.likes,
                stars: action.stars,
                photo: action.photo,
                tags: action.tags}}}});
      }
//      else return 'error';
      return state;
      }
      case 'DELETE_NOTE': {
        let findOwner = state.byId[action.id].ownerId === action.userId;
        console.log(findOwner)
        if (findOwner) {
          return update(state, {
            byId: {
              [action.id]: { $set: null }},
            allNotes: {
              $apply: allNotes => allNotes.filter(noteId => noteId !== action.id)
            }
          });
        }
      }
    default: return state;
  }
}

export default notes;
