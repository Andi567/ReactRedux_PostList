export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POST":
      return action.payload;

    default:
      return state;
  }
};

/*
if (action.type === "FETCH_POST") {
    return action.payload;
  }

  return state;

  */
