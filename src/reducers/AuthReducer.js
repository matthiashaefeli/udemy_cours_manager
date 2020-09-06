import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};