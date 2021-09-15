import getBaseUrl from '@games/base-url';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Game from './app/game/Game';
import App from './app/home/App';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path={getBaseUrl()} exact component={App} />
        <Route path={`${getBaseUrl()}*`} component={Game} />
      </Switch>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
);
