export const signupReducer = (state, { type, payload }) => {
  switch (type) {
    case "FIRST_NAME":
      return { ...state, firstname: payload };

    case "LAST_NAME":
      return { ...state, lastname: payload };

    case "EMAIL":
      return { ...state, email: payload };

    case "PASSWORD":
      return { ...state, password: payload };

    default:
      return state;
  }
};
