import React,{Component} from 'react';// 按需加载  es6结构

class Comment extends Component{
  render(){
     console.log(this.props)
    let {comment} = this.props
    return(
    <div>{comment.username}:{comment.content}</div>
    )
  }
}
export default Comment;