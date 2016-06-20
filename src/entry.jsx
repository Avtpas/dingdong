import React from 'react';
import ReactDOM from 'react-dom';
//所有组件
import {S} from './module/index';

const AppHandler = require('./module/base/AppHandler')

import LeftBar from "./module/components/LeftBar"
import SearchBar from "./module/components/SearchBar"
import ChatList from "./module/components/ChatList"
import HeadBar from "./module/components/HeadBar"

require("./assets/css/base.css")

//所有页面
'use strict'
class App extends AppHandler {
    constructor(props){
        super(props);
        this.state = {
            mid:ChatList
        }
    }
    render(){
        return(
            <div id="app">
                <LeftBar/>
                <div className="mid-bar">
                    <SearchBar />
                    <section className="content">
                        <this.state.mid />
                    </section>
                </div>
                <div className="right-bar">
                    <HeadBar/>
                </div>
            </div>
        )
    }
}

setTimeout(function(){
    ReactDOM.render(<App stages={S} />, document.querySelector("#container"));
},0)
