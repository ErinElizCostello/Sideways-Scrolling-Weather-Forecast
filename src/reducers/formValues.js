export const formValues = (state = {}, action) => {
  switch (action.type) {
    case 'SET_FORM_VALUES':
      return action.data;
    default:
      return state;
  }
};