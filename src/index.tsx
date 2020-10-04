// Important that babel polyfill sits first for "regenrators"....whatever those are
import "@babel/polyfill";
import { ConnectedRouter } from "connected-react-router";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';

// Entry point for styling
import './index.scss';
import { IAppState, configureStore, history } from "./store";
import { App } from "components";

// import { CookiesProvider } from "react-cookie";


// Import the store function and state
// import configureStore, { IAppState, history } from './store';

interface RootProps {
  store: Store<IAppState>;
}


/* 
Create a root component that receives the store via props
and wraps the App component with:
   Provider, giving props to components
   Router, giving route history to components for route handling
*/
const Root: React.FunctionComponent<RootProps> = props => {
  return (
      <Provider store={props.store}>
        <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */}
                <App/>
        </ConnectedRouter>
      </Provider>
  );
};

// Generate the store
const store = configureStore();

// Render the App
ReactDOM.render(<Root store={store} />, document.getElementById(
  'root'
) as HTMLElement);