const CHECKSTATUS = 'CHECKSTATUS';
const initialState = [];

// ACTION CREATOR

export function checkstatus() {
  return {
    type: CHECKSTATUS,
  };
}

// REDUCER

export default function categoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHECKSTATUS:
      return 'UNDER CONSTRUCTION';
    default:
      return state;
  }
}
