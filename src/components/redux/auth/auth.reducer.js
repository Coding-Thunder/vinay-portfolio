import authTypes from "./auth.types";

const INITIAL_STATE = {
  show: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authTypes.TOOGLE_LOGIN_SIGNUP_MODAL:
      return {
        ...state,
        show: !state.show,
      };
    default:
      return state;
  }
};

export default authReducer;
