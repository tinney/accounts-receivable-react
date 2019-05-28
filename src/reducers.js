const reducer = (state = 'foo', action) => {
  switch (action.type) {
    case 'foo':
      return action.filter;
    default:
      return state;
  }
}

export default reducer;