const notes = (state={}, action) => {
  switch(action.type) {
    case 'NEW_NOTE': {
      return {...state, name: 'spencer'}
    }
    default: return state;
  }
}

export default notes;