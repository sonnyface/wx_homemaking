// pages/jujiabaojie/jujiabaojie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  //获取地图
  getLocation: function () {
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: 34.720050,
          longitude: 113.642910,
          scale: 28,
          name: '郑州晓伟家政服务有限公司'
        })
      }
    })
  },
  //拨打电话
  makePhoneCall01: function () {
    wx.makePhoneCall({
      phoneNumber: '0371-60305869' //仅为示例，并非真实的电话号码
    })
  },
  //拨打电话
  makePhoneCall02: function () {
    wx.makePhoneCall({
      phoneNumber: '15890674178' //仅为示例，并非真实的电话号码
    })

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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})