export function setUserEmail(email) {
  return {
    type: 'SET_USER_EMAIL',
    email,
  };
}

export function setUserPassword(password) {
  return {
    type: 'SET_USER_PASSWORD',
    password,
  };
}
