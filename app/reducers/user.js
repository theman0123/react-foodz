import update from 'immutability-helper';

const user = (state={}, action) => {
  switch(action.type) {
    case 'LOG-IN': {
      return {...state, id: '999'}
    };
    default: return state; 
  }
};
export default user;
