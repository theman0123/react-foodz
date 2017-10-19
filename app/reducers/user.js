import update from 'immutability-helper';

const user = (state={}, action) => {
  switch(action.type) {
    case 'LOG-IN': {
      return {...state, 
              id: action.id,
              username: action.username,
              avatar: action.avatar,
             }
      //what other user info to track?
      //backend->user in: date/time
      //out: date/time
    };
    case 'LOG-OUT': {
      return {...state, id: null}
    }
    default: return state; 
  }
};
export default user;
