import { GET_JOKE, FETCHING_JOKE } from "../action/jokeaction";

const initialState = {
  joke: {
    type: "",
    setup: "hello",
    punchline: "hello",
  },
  isFetchingJoke: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOKE:
      return { ...state, joke: action.payload };
    case FETCHING_JOKE:
      return { ...state, isFetchingJoke: action.payload };
    default:
      return state;
  }
};
