import {
  RETRIEVED_COLLECTION,
  ADDED_TO_COLLECTION,
  DELETED_FROM_COLLECTION,
} from '../actions/types';

const INITIAL_STATE = {
  movies: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RETRIEVED_COLLECTION:
      return {...state};
    case ADDED_TO_COLLECTION:
      return {...state};
    case DELETED_FROM_COLLECTION:
      return {...state};
  }
};
