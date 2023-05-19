import React from "react";
import { connect } from "react-redux";
import { getJokeList } from "../action/jokeaction";

const Joke = ({ joke, getJokeList, fetchingJoke, error }) => {
  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (fetchingJoke) {
    return <h2>Fetching joke for ya!</h2>;
  }

  return (
    <>
      <div>
        <h2>
          {joke.setup} {joke.punchline}
        </h2>
      </div>
      <button onClick={getJokeList}>Get New Joke</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    joke: state.joke,
    fetchingJoke: state.fetchingJoke,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getJokeList })(Joke);
