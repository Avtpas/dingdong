/**
 * Created by Administrator on 2016/6/20.
 */
import React from 'react';
class HeadBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return <div style={{"-webkit-app-region": "drag"}} className="head-bar">
            header
        </div>
    }
}
module.exports = HeadBar;