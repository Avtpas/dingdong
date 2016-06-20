/**
 * Created by Administrator on 2016/6/20.
 */
import React from 'react';
class LeftBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    select(index){
        if(index!==this.state.active){
            this.setState({
                active:index
            })
        }
    }

    /**
     * render the nav-bar
     * @returns {Array}
     */
    renderNavs(){
        let navs = (this.props.navs && this.props.navs instanceof Array && this.props.nav) ||[1,2,3];
        var context = this;
        return <section>
            {navs.map(function(n,i){
                return <nav key={i} onClickCapture={context.select.bind(context,i)} className={context.state.active===i?"active":""}>
                    <img src={context.props.headPic || "../src/assets/images/chat.png"} style={{"-webkit-app-region": "no-drag"}} className="head-pic"/>
                </nav>
            })}
        </section>
    }
    render(){
        return <div style={{"-webkit-app-region": "drag"}} className="left-bar">
            <header>
                <img src={this.props.headPic || "../src/assets/images/pic.jpg"} style={{"-webkit-app-region": "no-drag"}} className="head-pic"/>
            </header>
            {this.renderNavs()}
        </div>
    }
}
module.exports = LeftBar;