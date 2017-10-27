import fakeApi from './fakeApi.js';


const fetchNotes = (filter) => {
//  setTimeout(() => {}, 2000).then() => {
//    throw new Error('Error, Something Went Wrong');
//    }

    switch(filter) {
      case 'ALL': {
        return fakeApi.notes;
      }
    }
};
console.log(fetchNotes('ALL'));
