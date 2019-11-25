import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Reader from '../Reader';
import styles from './App.module.css';
import publications from '../../Data/publications.json';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div className={styles.reader}>
          <Switch>
            <Route
              path="/reader/"
              render={props => {
                const { history, match, location } = props;
                return (
                  <Reader
                    history={history}
                    match={match}
                    location={location}
                    items={publications}
                  />
                );
              }}
            />
            <Redirect to="/reader?item=1" />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
