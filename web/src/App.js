import React, { Component } from "react";
import './index.css';

class App extends Component {

    render() {
        return (
            <div className="frame">
                {/* 顶部菜单栏 */}
                <div className="frametop">
                    <ul>
                        <li><a href="#">Study</a></li>
                        
                        <li><a href="#">Coding</a></li>
                        <li><a href="#">置顶模块菜单！</a></li>
                    </ul>
                </div>

                {/* 底部内容栏 */}
                <div className="framebottom">
                    <div className="bothmenu">  
                        <ul>
                            <li><a href="#">Study</a><br /></li>
                            <li><a href="#">Coding</a><br /></li>
                            <li><a href="#">Linux</a><br /></li>
                        </ul>                      
                    </div>

                    <div className="middlemenu">
                        <h1 className="bottomfont">中间内容板块！</h1>
                    </div>

                    <div className="bothmenu">
                        <h1 className="bottomfont">右边个性化展示！</h1>
                    </div>

                </div>
            </div>
        )
    }
}

export default App;