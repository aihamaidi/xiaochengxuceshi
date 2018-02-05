//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    financing:{
      avatarUrl:'../image/理财.jpg',
      nickName:'存款业务'
    },
    station:{
      avatarUrl:'../image/网点.jpg',
      nickName: '网点查询'
    },
    creditCard:{
      avatarUrl:'../image/信用卡.jpg',
      nickName: '贷款业务'
    },
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //贷款业务
  ToLoan:function(){
    wx.navigateTo({
      url: '../loan/loan'
    })
  },
  //网点地图
  ToMap:function(){
    wx.navigateTo({
      url: '../map/map'
    })
  },
  ToDeposit:function(){
    wx.navigateTo({
      url: '../deposit/deposit'
    })
  },
  //理财产品
  ToFinancingPage:function(){
    wx.navigateTo({
      url: '../financing/finacing'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
