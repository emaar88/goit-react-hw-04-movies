import React, { Component } from "react";
import moviesAPI from "./../../services/tv-api";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";

export default class Home extends Component {
  state = {
    movies: [],
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    moviesAPI
      .allMovies()
      .then((movies) => this.setState({ movies }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { match } = this.props;
    const { movies, loading } = this.state;
    return (
      <div>
        <h1>Trending today</h1>
        {loading && <Loader />}
        <ul>
          {movies.length > 0 &&
            movies.map(
              (movie) =>
                movie.original_title && (
                  <li key={movie.id}>
                    <Link
                      to={{
                        pathname: `movies/${movie.id}`,
                        state: { from: this.props.location },
                      }}
                    >
                      {movie.original_title}
                    </Link>
                  </li>
                )
            )}
        </ul>
      </div>
    );
  }
}
