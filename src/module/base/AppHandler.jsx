/**
 * Created by Administrator on 2016/4/28.
 */
import React from 'react';


/**
 * App 通用mix
 * @type {AppHandler}
 */
module.exports = class AppHandler extends React.Component{
    constructor(props){
        super(props)
        this.state = {};

        window.App = this;
    }
    //切换场景时候触发，处理公共组件的隐藏
    onSwitchStage(){
        this.setState({
            dialog:0,
            messageInput:0
        })
    }
    alert(msg, callback) {
        callback = (callback && callback instanceof Function) ? callback : function () {
        };
        this.setState({
            dialog: {
                title: msg,
                show: true,
                buttons: [{
                    text: "知道了",
                    cls:"ok",
                    events: {
                        click(){
                            callback();
                            this.close();
                        }
                    }
                }]
            }
        })
    }
    confirm(msg,callback){
        callback = (callback && callback instanceof Function) ? callback : function () {
        };
        this.setState({
            dialog: {
                title: "提示",
                show: true,
                content: msg,
                buttons: [{
                    text: "取消",
                    events: {
                        click(){
                            this.close();
                        }
                    }
                },{
                    text: "确定",
                    cls:"ok",
                    events: {
                        click(){
                            callback();
                            this.close();
                        }
                    }
                }]
            }
        })
    }
    tip(msg){
        this.setState({
            dialog: {
                show: true,
                title: msg,
            }
        })
        setTimeout(()=>{
            this.setState({
                dialog:0
            });
        },2000);
    }
    renderDialog(){
        //return <Dialog App={this} {...this.state.dialog}/>
        return <div>dialog</div>
    }
    open(){
        this.alert('hehehe');
    }
    close(){
        this.setState({dialog:null});
    }
    MI(state){
        this.setState({
            messageInput:state
        })
    }
    renderMI(){
        return <MessageInput {...this.state.messageInput}/>
    }
}