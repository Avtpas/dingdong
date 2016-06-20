/**
 * Created by Administrator on 2016/6/20.
 */
import React from 'react';
class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return <div style={{"-webkit-app-region": "drag"}} className="search-bar">
            <input type="text" style={{"-webkit-app-region": "no-drag"}} placeholder="搜索"/>
            <button style={{"-webkit-app-region": "no-drag"}}>+</button>
        </div>
    }
}
module.exports = SearchBar;