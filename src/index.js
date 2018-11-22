import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './asset/javascript/serviceWorker';
import "./asset/css/rest.css"
import "./asset/css/common.styl"
// 首页
import AppRouter from './pages/routerRoot';

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
