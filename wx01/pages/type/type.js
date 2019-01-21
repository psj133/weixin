// pages/type/type.js
import Type from './type-model.js'
var type=new Type()
Page({

  /**
   * 页面的初始数据
   */
  data: {
     typeList:[],
     tabSel:0,
     goodImg:'',
     default:'/img/1.jpg',
     root:type.baseUrl,
     loadingHidden:false
  },
  changeNav(e){
      let types=type.dataSet(e,"type");
    type.getDataBytype(types,(res)=>{
        this.setData({
          goodImg:res[0].path
        })
      })
      let index=type.dataSet(e,'index');
      this.setData({
        tabSel:index
      })
    
  },
  goDetails(e){
    let id=type.dataSet(e,"id");
    console.log(id);
    wx.navigateTo({
      url: `../details/details?goodsId=${id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // console.log(options)
      wx.setNavigationBarTitle({
        title: '精品分类',
      })
      type.getTypeData((res)=>{
        console.log(res);
         this.setData({
           typeList:res,
           loadingHidden: true
         })
      })
    
      // type.getDataBytype()
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