//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    name: 123456,
    lists: ["http://ozchj4jpk.bkt.clouddn.com/01.jpg",
            "http://ozchj4jpk.bkt.clouddn.com/02.jpg",
            "http://ozchj4jpk.bkt.clouddn.com/03.jpg",
            "http://ozchj4jpk.bkt.clouddn.com/04.jpg",
            "http://ozchj4jpk.bkt.clouddn.com/05.jpg",
            "http://ozchj4jpk.bkt.clouddn.com/06.jpg",
            "http://ozchj4jpk.bkt.clouddn.com/07.jpg",
            "http://ozchj4jpk.bkt.clouddn.com/08.jpg",
            "http://ozchj4jpk.bkt.clouddn.com/09.jpg"
    ]
  },
  //事件处理函数
  pageTwo: function (e) {
    // console.log(e.currentTarget.dataset.id)
    var id = e.currentTarget.dataset.id;
    if(id==1){
      wx.navigateTo({
        url: '../logs/logs'
      })
    } else if (id == 2){
      wx.navigateTo({
        url: '../yuesao/yuesao'
      })
    } else if (id == 3) {
      wx.navigateTo({
        url: '../yuyingshi/yuyingshi'
      })
    } else if (id == 4) {
      wx.navigateTo({
        url: '../laorenhuli/laorenhuli'
      })
    } else if (id == 5) {
      wx.navigateTo({
        url: '../jujiabaojie/jujiabaojie'
      })
    } else if (id == 6) {
      wx.navigateTo({
        url: '../baojiegongshi/baojiegongshi'
      })
    }
   
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
  //图片预览
  previewImage: function (e) {
    var current = e.currentTarget.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.lists // 需要预览的图片http链接列表  
    })
  },
  onLoad: function () {
    // var that = this 
    // wx.request({
    //   url: 'https://yrgjzb.com/yxzsb/public/index.php/api/index/img', 
    //   data: {  

    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     // console.log(res.data.data)
    //     var obj = res.data.data        
    //     that.setData({
    //       lists: obj          
    //     })
    //   }
    // })

  },
  changeName: function (e) {
    // sent data change to view
    this.setData({
      name: 'MINA'
    })
  }
})
