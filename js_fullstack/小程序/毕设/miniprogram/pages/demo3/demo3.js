// pages/demo3/demo3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: []
  },
  getData(num=5,page=0) {
    wx.cloud.callFunction({
      name: "demoGetList",
      data: {
        num,
        page
      }
    }).then(res => {
      // console.log(res.result.data)
      const oldData = this.data.dataList
      const newData = oldData.concat(res.result.data)
      console.log(res.result.data.length)
      this.setData({
        dataList: newData
      })
    })
  },
  // 点击将阅读数加一
  clickRow(res) {
    // 1. 获取点击的id和索引值
    // 2. 云函数进行更新操作
    // 3. 前端连后端， 将数据传输给后端，后端返回再返回数据
    // 4. 重新渲染列表数据
    wx.showLoading({
      title: '数据加载中',
      mask:true
    })
    const {id,idx} = res.currentTarget.dataset
    // console.log(res.currentTarget.dataset)
    wx.cloud.callFunction({
      name:"demoUpList",
      data: {
        id
      }
    }).then(res => {
      const newData = this.data.dataList
      newData[idx].hints +=1
      this.setData({
        dataList:newData
      })
      wx.hideLoading()
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
    console.log(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const page = this.data.dataList.length
    this.getData(5,page)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})