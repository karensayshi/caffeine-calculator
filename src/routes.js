import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './components/App';
import MainPage from './components/MainPage';
import SomeOtherPage from './components/SomeOtherPage';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route path="/some/otherpage" component={SomeOtherPage} />
  </Route>
);

import { Router, hashHistory as history } from 'react-router';
// Your routes.js file
import routes from './routes';

ReactDOM.render(
  <Router routes={routes} history={history} />,
  document.getElementById('calories-calculator')
);


render() {
  return (
    <div>
      <header>
        About my calculation
      </header>

      <main>
        {this.props.children}
      </main>

      <footer>
        References
      </footer>
    </div>
  );
}
