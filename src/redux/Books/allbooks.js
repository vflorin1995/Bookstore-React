const initialState = [
  {
    id: 0,
    title: 'Harry Potter',
    author: 'JK Rawling',
  },
  {
    id: 1,
    title: 'Math',
    author: 'Einstein',
  },
  {
    id: 2,
    title: 'Physics',
    author: 'Newton',
  },
];

// ACTIONS

const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';

// REDUCER

export default function book(state = initialState, action = {}) {
  switch (action.type) {
    case ADDBOOK:
      return [...state, {
        id: action.id,
        author: action.author,
        title: action.title,
      }];
    case REMOVEBOOK:
      return [state.slice(0, action.id), state.slice(action.id + 1, state.length)];
    default:
      return state;
  }
}

// ACTION CREATORS

export function addbook(id, title, author) {
  return {
    type: ADDBOOK,
    id,
    title,
    author,
  };
}

export function removebook(id) {
  return {
    type: REMOVEBOOK,
    id,
  };
}
