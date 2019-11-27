import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Reader from '../Reader';
import styles from './App.module.css';
import routes from '../../routes';
import publications from '../../Data/publications.json';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div className={styles.reader}>
          <Switch>
            <Route
              path={routes.READER}
              // eslint-disable-next-line react/jsx-props-no-spreading
              render={props => <Reader {...props} items={publications} />}
            />
            <Redirect to={`${routes.READER}?item=1`} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
