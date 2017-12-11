import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise  from 'redux-promise'

import reducers from './reducers'
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router'


import App from './components/App';
import PostDetail from './components/PostDetail'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise)(createStore)(reducers,devTools)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/:category?" component={App} />
                <Route path="/post/:id" component={PostDetail}/>
            </Switch>
      </BrowserRouter>
    </Provider>, document.getElementById('root')
);