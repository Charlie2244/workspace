let ipUrl = 'http://127.0.0.1:7001/admin/'

let servicePath = {
  // 后端登陆页面可以访问这个地址
  checkLogin:ipUrl + 'checkOpenId' ,  //  检查用户名密码是否正确
  getTypeInfo:ipUrl + 'getTypeInfo' ,  //  获取文章类别信息
}
export default servicePath