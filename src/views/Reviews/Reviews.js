import React, { Component } from "react";
import moviesAPI from "../../services/tv-api";
import Loader from "../../components/Loader";

export default class Reviews extends Component {
  state = { review: "", loading: false, error: null };

  componentDidMount() {
    this.setState({ loading: true });
    moviesAPI
      .movieReviews(this.props.match.params.movieId)
      .then((review) => this.setState({ review }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }
  // async componentDidMount() {
  //   try {
  //     this.setState({ loading: true });
  //     moviesAPI
  //       .movieReviews(this.props.match.params.movieId)
  //       .then((review) => this.setState({ review }));
  //   } catch (e) {
  //     moviesAPI.movieReviews((error) => this.setState({ error }));
  //   } finally {
  //     moviesAPI.movieReviews(() => this.setState({ loading: false }));
  //   }
  // }

  render() {
    const { review, loading, error } = this.state;
    const { match } = this.props;
    return (
      <div>
        {error && <p>We don`t have reviews list</p>}
        {loading && <Loader />}
        {review.length > 0 ? (
          <ul>
            {review.map((rev) => (
              <li key={rev.id}>
                <h4>{rev.author}</h4>
                <p>{rev.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don`t have reviews list</p>
        )}
      </div>
    );
  }
}
