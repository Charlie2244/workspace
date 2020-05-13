import React,{Component} from 'react';// 按需加载  es6结构
import CommentInput from './CommentInput';
import CommentList from './CommentList';
// let {a,b,c} = {a:1,b:2,c:3}
// react facebook 高级 OO
class CommentApp extends Component{
  render(){
    return(
      <div className="wrapper">
        <CommentInput onSubmit = {this.handleSubmitComment.bind(this)}/>
        <CommentList />
      </div>
    )
  }
  handleSubmitComment(comment){
    console.log(comment)
  }
}

export default CommentApp;