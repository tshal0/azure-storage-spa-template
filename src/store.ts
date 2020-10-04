import { connectRouter, routerMiddleware, RouterState } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, combineReducers, createStore, Store } from "redux";



export interface IAppState {
    router: RouterState
}

const initialAppState = <IAppState>{
    router: {}
};
export const history = createBrowserHistory();


const rootReducer = combineReducers<IAppState>({
    router: connectRouter(history)
});
const routeMiddleware = routerMiddleware(history);
export function configureStore(): Store<IAppState, any> {
    const store = createStore(rootReducer, undefined, applyMiddleware(routeMiddleware));
    return store;
}