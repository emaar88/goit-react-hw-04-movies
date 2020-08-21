import React, { Component } from "react";
import moviesAPI from "../../services/tv-api";
import Loader from "../../components/Loader";

export default class Reviews extends Component {
  state = { review: null, loading: false };

  componentDidMount() {
    this.setState({ loading: true });
    moviesAPI
      .movieReviews(this.props.match.params.movieId)
      .then((review) => this.setState({ review }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { review, loading } = this.state;
    const { match } = this.props;
    return (
      <div>
        {loading && <Loader />}
        <ul>
          {review !== null ? (
            review.map((rev) => (
              <li key={rev.id}>
                <h4>{rev.author}</h4>
                <p>{rev.content}</p>
              </li>
            ))
          ) : (
            <p>We don`t have casts list</p>
          )}
        </ul>
      </div>
    );
  }
}
