import React, { Component, lazy, Suspense } from "react";
import moviesAPI from "./../../services/tv-api";
import "./MovieDetails.scss";
import routes from "../routes";
import { NavLink, Switch, Route } from "react-router-dom";
import Loader from "../../components/Loader";

const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

export default class MovieDetails extends Component {
  state = { movie: null, loading: false };

  componentDidMount() {
    this.setState({ loading: true });
    moviesAPI
      .movieDetails(this.props.match.params.movieId)
      .then((movie) => this.setState({ movie }))
      .finally(() => this.setState({ loading: false }));
  }

  handleGoBack = () => {
    const { state } = this.props.location;
    if (state && state.from) {
      return this.props.history.push(state.from);
    }
    this.props.history.push(routes.movies);
  };

  render() {
    const { movie, loading } = this.state;
    const { match } = this.props;
    return (
      <div className="containerShow">
        <button type="button" className="goBack" onClick={this.handleGoBack}>
          Назад к списку
        </button>
        <br />
        {loading && <Loader />}
        {movie && (
          <>
            <div className="container_info">
              <div className="img_div">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  width="300"
                  height="400"
                  alt={movie.name}
                />
              </div>
              <div className="desc_div">
                <h1>{movie.original_title}</h1>

                <h2>Overview</h2>
                <p>{movie.overview}</p>

                <h3>Genres</h3>
                <div className="genres">
                  {movie.genres.map((genre) => (
                    <p key={genre.id}>{genre.name}</p>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        <div className="additional_info_links">
          <h3>Additional Information</h3>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: `${match.url}/cast`,
                  state: { from: this.props.location },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${match.url}/reviews`,
                  state: { from: this.props.location },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="add_info_output">
          <Suspense fallback={<p>Loading</p>}>
            <Switch>
              <Route path={routes.cast} component={Cast} />
              <Route path={routes.reviews} component={Reviews} />
            </Switch>
          </Suspense>
        </div>
      </div>
    );
  }
}
