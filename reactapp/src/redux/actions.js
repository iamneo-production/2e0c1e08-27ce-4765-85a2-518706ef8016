
  export const login = (username) => {
    return {
      type: 'LOGIN',
      payload: username,
    };
  };
export const logout = (username) => {
    return {
      type: 'LOGOUT',
      payload: null,
    };
  };