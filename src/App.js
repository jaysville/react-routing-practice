import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = lazy(() => import("./Pages/NewQuote"));
const QuoteDetails = lazy(() => import("./Pages/QuoteDetails"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const AllQuotes = lazy(() => import("./Pages/AllQuotes"));

function App() {
  const fallbackUI = (
    <div className="centered">
      <LoadingSpinner />
    </div>
  );
  return (
    <Layout>
      <Suspense fallback={fallbackUI}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetails />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
