import React from "react";

const InlineMovieDetails = ({ match }) => (
  <div>Movie Details {match.params.movieId}</div>
);
export default InlineMovieDetails;
