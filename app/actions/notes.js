import { CALL_API, Schemas } from '../middleware/api.js';

export const NOTES_REQUEST = 'NOTES_REQUEST';
export const NOTES_SUCCESS = 'NOTES_SUCCESS';
export const NOTES_FAILURE = 'NOTES_FAILURE';

export const getNotesFor = id => ({
  [CALL_API]: {
    types: [ NOTES_REQUEST, NOTES_SUCCESS, NOTES_FAILURE ],
    endpoint: `todo: QUERY DB ?id=${id}`,
    schema: Schemas.NOTES_ARRAY
  }
});

//see actions/places.js for all actions...

