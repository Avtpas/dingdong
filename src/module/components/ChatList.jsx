/**
 * Created by Administrator on 2016/6/20.
 */
import React from 'react';
class ChatList extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    select(index){
        this.setState({
            active:index
        })
    }
    renderList(){
        let context = this;
        let chats = (this.state.chats && this.state.chats instanceof Array && this.state.chats) ||[1,2,3,4,5,6,7,8,9,10];

        return chats.map(function(n,i){
            return <li className={"chat-list-item "+(context.state.active===i?"active":"")} key={i} onClickCapture={context.select.bind(context,i)}>
                <header><img src="../src/assets/images/meng.jpg"/></header>
                <section className="who">
                    <div>小萌宝</div>
                    <div>[链接]</div>
                </section>
                <footer className="time">
                    <div>12:08</div>
                </footer>
            </li>
        });
    }
    render(){
        return <div  className="chat-list">
            <ul>
                {this.renderList()}
            </ul>
        </div>
    }
}
module.exports = ChatList;