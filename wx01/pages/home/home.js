// pages/home/home.js
import Home from './home-model.js'
var home=new Home();
// console.log(home)
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[],
    products:[],
    root:home.baseUrl,
    loadinghidden:false,
    inputVal:''
  },
  search(){
   let val=this.data.inputVal;
   if(!val) return;
    wx.navigateTo({
      url: `../search/search?result=${val}`,
    })
  },
  getInputVal(e){
    let keyVal=home.detail(e);
    this.setData({
      inputVal:keyVal
    })
    
  },
  go(e){
    let obj=home.dataSet(e);
    wx.navigateTo({
      url: `../details/details?goodsId=${obj.id}`,
      
    })
  },
  goTheme(e){
    // console.log(e);
    
    let obj=home.dataSet(e);
    // console.log(obj);
    wx.navigateTo({
      url: `../theme/theme?themeid=${obj.id}&title=${obj.title}`,

    })
  },
  join(){
    wx.switchTab({
      url: '../shopcar/shopcar',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     home.getData((res)=>{
       if(res.err==1){
        //  console.log(res);
         this.setData({
           loadinghidden:true,
           imgUrls:res.data,
           products:res.data
         })
       }
     })
  },









  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
      // console.log('用户下拉')
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      // console.log('到底了')
    wx.showToast({
      title: '已经到底了',
      icon: 'success',
      duration: 2000
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '自定义转发标题',
      path: '/pages/home/home',
      imageUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3078873712,1340878922&fm=26&gp=0.jpg'
    }
  }
})