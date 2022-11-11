// ACTIONS

const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';
const GETBOOKS = 'GETBOOKS';

// REDUCER

export default function book(state = [], action = {}) {
  switch (action.type) {
    case ADDBOOK:
      return [...state, {
        id: action.id,
        author: action.author,
        title: action.title,
        category: action.category,
      }];
    case REMOVEBOOK:
      return [...state.filter((state) => state.id !== action.id)];
    case GETBOOKS:
      return [...action.payload];
    default:
      return state;
  }
}

// ACTION CREATORS

export function addbook(id, title, author, category) {
  return {
    type: ADDBOOK,
    id,
    title,
    author,
    category,
  };
}

export function removebook(id) {
  return {
    type: REMOVEBOOK,
    id,
  };
}

export function getbooks(payload) {
  return {
    type: GETBOOKS,
    payload,
  };
}

// CREATE ASYNC THUNK FUNCTION

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/36jFMZe4fm8UZIxvQLmM/books';

export const fetchBooks = () => async (dispatch) => {
  await fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const values = [];
      Object.values(data).map((x) => values.push({ ...x[0] }));
      const indexes = [];
      Object.keys(data).map((x, id) => indexes.push({
        id: x, title: values[id].title, author: values[id].author, category: values[id].category,
      }));
      dispatch(getbooks(indexes));
    });
};

export const addABook = (id, title, author, category) => async (dispatch) => {
  const object = {
    item_id: id,
    title,
    author,
    category,
  };
  await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(object),
  });
  dispatch(addbook(id, title, author, category));
};

export const removeABook = (id) => async (dispatch) => {
  const object = { item_id: id };
  await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(object),
  });
  dispatch(removebook(id));
};
