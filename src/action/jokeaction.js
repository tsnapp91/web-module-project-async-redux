import axios from "axios";

export const GET_JOKE = "GET_JOKE";
export const FETCHING_JOKE = "FETCHING_JOKE";

export const getJokeList = () => (dispatch) => {
  dispatch(fetchingJoke(true));
  axios
    .get("https://official-joke-api.appspot.com/random_joke")
    .then((res) => {
      console.log(res.data);
      dispatch(getJoke(res.data));
    })
    .catch((err) => {
      // todo: dispatch getPersonError
      console.log(err.message);
    })
    .finally(() => {
      dispatch(fetchingJoke(false));
    });
};

export const getJoke = (joke) => ({
  type: GET_JOKE,
  payload: joke,
});

export const fetchingJoke = (isFetchingJoke) => ({
  type: FETCHING_JOKE,
  payload: isFetchingJoke,
});
