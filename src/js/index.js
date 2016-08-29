"use strict";

import React from 'react';
import WeUI from 'react-weui';
import ReactDom from "react-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'weui';
import '../css/index.less';
import '../css/base/reset.css';
import { Router, Route, IndexRoute ,browserHistory,hashHistory} from 'react-router';
const {
 Button,ButtonArea,Icon ,
  Tab,
    TabBody,
    TabBar,
    TabBarItem,
    TabBarIcon,
    TabBarLabel,
    Article
} = WeUI;

import Home from "./page/home.js"
import Test from "./page/test.js"

class App extends React.Component {
  
    render(){
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="page"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                style={{height: '100%'}}
            >
                {React.cloneElement(this.props.children, {
                        key: this.props.location.pathname
                })}
            </ReactCSSTransitionGroup>
        );
    }
};

class MyRoute extends React.Component {
  
    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                  <IndexRoute component={Home} />
                  <Route path="test" component={Test}/>
                </Route>
            </Router>
        )
    }
};


ReactDom.render(<MyRoute />, document.querySelector("#app"));