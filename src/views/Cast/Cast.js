import React, { Component } from "react";
import moviesAPI from "../../services/tv-api";
import "./Cast.scss";
import Loader from "../../components/Loader";

export default class Cast extends Component {
  state = { casts: null, loading: false };

  componentDidMount() {
    this.setState({ loading: true });
    moviesAPI
      .movieCredits(this.props.match.params.movieId)
      .then((casts) => this.setState({ casts }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { casts, loading } = this.state;
    return (
      <div>
        {loading && <Loader />}
        {casts !== null ? (
          <ul className="cast_list">
            {casts.map((cast) => (
              <li key={cast.id}>
                <div className="cast_wrap">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                    alt={`${cast.name}`}
                    height="150"
                    width="100"
                  />
                  <p>{cast.name}</p>
                  <p>{cast.character}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don`t have casts list</p>
        )}
      </div>
    );
  }
}
