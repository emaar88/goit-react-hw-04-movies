import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "./../../views/NotFound";
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
        <Route path={routes.movieDetails} component={MovieDetails} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Layout>
);

export default App;
