import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
// import Home from "./../../views/Home";
// import Movies from "./../../views/Movies";
// import MovieDetails from "./../../views/MovieDetails";
import NotFound from "./../../views/NotFound";
import Navigation from "./../Navigation/Navigation";
import Layout from "./../Layout/Layout";
import routes from "./../../views/routes";

const Home = lazy(() => import("./../../views/Home/Home"));
const Movies = lazy(() => import("./../../views/Movies/Movies"));
const MovieDetails = lazy(() =>
  import("./../../views/MovieDetails/MovieDetails")
);

const App = () => (
  <Layout>
    <Suspense fallback={<p>Loading</p>}>
      <Switch>
        <Route path={routes.home} exact component={Home} />
        <Route path={routes.movies} exact component={Movies} />
        {/* <Route path={routes.cast} component={Cast} />
        <Route path={routes.cast} component={Reviews} /> */}
        <Route path={routes.movieDetails} component={MovieDetails} />
        {/* <Redirect to="/" /> */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Layout>
);

export default App;
