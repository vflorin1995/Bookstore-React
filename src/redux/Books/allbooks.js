const initialState = [
  {
    id: 1,
    title: 'Harry Potter',
    author: 'JK Rawling',
  },
  {
    id: 2,
    title: 'Math',
    author: 'Einstein',
  },
  {
    id: 3,
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
      return [...state.filter((state) => state.id !== action.id)];
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
