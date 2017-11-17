export const taskTracker = {
  1: {
    title: 'zomato api to entities.places',
    start: 948,
    stop: 1200,
    notes: 'the main key to solving the problem was how noramlizr\'s \'new Schema\' command works and the shape of the response object being manipulated.'
  },
  2: {
    title: 'allow placeCards/Home to access state.entities.places',
    start: 1155,
    stop: 215,
    notes: 'having trouble iterating over an obejct and mapping values onto props of PlaceCards/VisiblePlaces.'
  },
  3: {
    title: 'continued-allow placeCards/Home to access state.entities.places',
    start: 338,
    stop: 548,
    notes: 'didn\'t get far at all... I do not know how to turn the object into an array. I don\'t know how to change the way the api middleware and pagination and reducers are working to give me the data... I don\'t know how to manipulate the store in the container component to have it easily accesible for other components to acces.'
  },
  4: {
    title: 'research unit testing',
    start: 830,
    stop: 1000,
    notes: 'research/reading. no action taken.'
  },
  5: {
    title: 'look into List.js in redux real-world example',
    start: 1145,
    stop: 132,
    notes: 'how do you pass down data?'
  },
  6: {
    title: 'setup id\'s from places, in order to use the array of id\'s as keys for distributing object values onto component',
    start: 133,
    stop: 300,
    notes: 'using the array of ids, use each as a key for each places object on entities.'
  },
  7: {
    title: 'on placeCard click, grab id, change view to noteView.',
    start: 1100,
    stop: 1231,
    notes: 'can\'t get onClick() to fire... next time start basic. getNotesFor(id) is a dispatched function for an API_CALL. Is it getting mapped to each placeCard? Get it working.'
  },
};
