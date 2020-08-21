import React, { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import getQueryParams from "../../utils/getQueryParams";
import Searchbox from "./../../components/Searchbox/Searchbox";
import moviesAPI from "./../../services/tv-api";
import inlineMovueDetails from "../inlineMovieDetails";
import Loader from "../../components/Loader";
import "./Movies.scss";

export default class Shows extends Component {
  state = {
    movies: [],
    loading: false,
  };
  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      this.ourSearchMovies(query);
      return;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);

    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.ourSearchMovies(nextQuery);
    }
  }

  ourSearchMovies = (query) => {
    moviesAPI
      .searchMovies(query)
      .then((movies) => this.setState({ movies }))
      .finally(() => this.setState({ loading: false }));
  };

  handleChangeQuery = (query) => {
    this.setState({ loading: true });
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, loading } = this.state;
    const { match } = this.props;
    return (
      <>
        <Searchbox onSubmit={this.handleChangeQuery} />
        {loading && <Loader />}
        {movies.length > 0 && (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
