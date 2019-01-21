// pages/theme/theme.js
import Theme from './theme-model.js'
var theme=new Theme();
Page({

  /**
   * 页面的初始数据
   */
  data: {
     themeImage:'',
     root:theme.baseUrl,
     loadingHidden:false,
     products:[]
  },
  join() {
    wx.switchTab({
      url: '../shopcar/shopcar',
    })
  },
  go(e) {
    // console.log(e);
    let obj=theme.dataSet(e);
    // console.log(obj)
    // console.log(theme.dataSet);
    wx.navigateTo({
      url: `../details/details?goodsId=${obj.id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id=options.themeid;
    theme.getThemeById(id,(res)=>{    
     if(res.err===0){
      //  console.log(res);
       this.setData({
         themeImage:res.data[0].path,
         products:res.data,
         loadingHidden:true
       })
     }
    })
    wx.setNavigationBarTitle({
      title:options.title
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