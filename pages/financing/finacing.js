// pages/financing/finacing.js
var list=[];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isChecked: false,
    list:[
      { name: "新华恒生村镇银行001号理财",yields:5.05,date:6,limit:"10万起购"}, 
      { name: "新华恒生村镇银行002号理财",yields:5.10,date:7,limit:"5万起购"},
      { name: "新华恒生村镇银行003号理财",yields:5.20,date:8,limit:"20万起购"},
      { name: "新华恒生村镇银行004号理财",yields:5.22,date:9,limit:"30万起购"},
      { name: "新华恒生村镇银行005号理财",yields:5.32,date:10,limit:"40万起购"}
    ],
    productList:[]
  },

  //页面底部刷新事件
  lower:function(e){
    console.log(e);
  },

  //列表排序方法
  sort:function(e){
    var sortList=this.data.list;
    if (e.currentTarget.id==="y"){
      this.setData({
        isChecked: true
      })
      for (var i = 0; i < sortList.length-1;i++){
        for (var j = 0; j < sortList.length-1-i;j++){
          if (sortList[j].yields < sortList[j+1].yields){
            var temp = sortList[j];
            sortList[j] = sortList[j+1];
            sortList[j+1]=temp;
          }
        }
      }
    }
    this.setData({
      list:sortList
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      productList:list
    })
    //更改页面标题
    wx.setNavigationBarTitle({
      title: "理财产品"
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