import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "./store/root-Reducer";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import MenuAppBar from "./components/Header";

const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store} >
   <BrowserRouter>
      <MenuAppBar />
      <AppRouter/>
   </BrowserRouter>
</Provider>,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
