import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './posts.css';
import List from './PostsApp';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { XHeader } from "./components/XHeader";
import { XFooter } from "./components/XFooter";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import { PUBLIC_URL } from "./config";
var $ = require('jquery');
window.$ = $;


ReactDOM.render(
    <BrowserRouter>
      <XHeader></XHeader>
      <Switch>
        <Route path={ PUBLIC_URL + "posts/" } exact component={List} />
      </Switch>
      <XFooter></XFooter>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
