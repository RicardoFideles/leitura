import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise  from 'redux-promise'

import reducers from './reducers'
import { Router, Route, IndexRoute } from 'react-router'
import { BrowserRouter } from 'react-router-dom'



import App from './components/App';
import Category from  './components/Category'
import PostDetail from './components/PostDetail'
import createHistory from 'history/createBrowserHistory'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise)(createStore)(reducers,devTools)

const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={App} />
                <Route exact path="/:category" component={Category} />
                <Route path="/post/:id" component={PostDetail}/>
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);