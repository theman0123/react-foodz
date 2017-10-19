const initialState = {
  fetching: false,
  fetched: false,
  errorMessage: null,
}

const fetch = (state=initialState, action) => {
  switch(action.type) {
    case 'FETCH_USERS': {
      return {...state, fetching: true}
    }
    case 'FETCH_USERS_ERROR': {
      return {...state,
        fetching: false,
        errorMessage: action.errorMessage
      }
    }
    case 'FETCH_USERS_SUCCESS': {
      return {...state,
        fetching: false,
        fetched: true
       }
    }
    default: return state;
  }
};
export default fetch;
