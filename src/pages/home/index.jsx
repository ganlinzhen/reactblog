import React, { Component } from 'react';
import './index.styl'

class Home extends Component {
  constructor (props) {
    super(props)
    console.log(this)
  }
  componentWillMount () {

  }
  render() {
    let hello = this.hello
    return (
      <div className="App">
        <div className="avator">
          我的头像
        </div>
        <header className="App-header">
          <h5>博客列表页面</h5>
          <button onClick={this.handleClick.bind(this, hello, 'zhen')}>点下我试试</button>
          <div></div>
        </header>
      </div>
    );
  }
  handleClick = (fun, arg) => {
    console.log('触发了点击事件', fun, arg)
    fun.bind(this)(arg)
  } 
  hello = () => {
    console.log('触发了事件处理函数')
  }
}

export default Home;
