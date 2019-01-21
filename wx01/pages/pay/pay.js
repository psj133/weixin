// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoList:[],
    goods:[],
    root: 'http://39.108.227.102:3000',
    all:0,
    allPrice:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '订单页面',
    })
    let infoList=[]||wx.getStorageSync('infoList');
    if (options.hasOwnProperty('person')){
       if(infoList.length==0){
        //  console.log(111);
         infoList.push(options);
         this.setData({
           infoList
         })
         wx.setStorageSync('infoList', infoList)
       }else{
        //  console.log(222);
        let infoList=wx.getStorageSync('infoList');
         this.setData({
           infoList
         })
       }
    }else{
      let goods = wx.getStorageSync('goods')||[]
      if(goods.length!==0){
        goods.map((item) => {
          if (item._id == options._id) {
            let sum = Number(item.sum) + Number(options.sum);
            // console.log(goods);
            item.sum=sum.toString();
            let all=goods.length;
           
            let allPrice = Number(goods[0].sum) * Number(goods[0].price.split('$')[1]);
            this.setData({
              goods,all,allPrice
            })
          }else{
            // return item
            // console.log(222);
            goods.push(options);
            let all = goods.length;
            console.log(all);
            let allPrice = all * Number(goods[0].sum) * Number(goods[0].price.split('$')[1]);
            this.setData({
              goods, all, allPrice
            })
            if (all > 2) {
              wx.showModal({
                title: '添加',
                content: '最多添加两条',
                success:()=>{
                  
                }
                
              })
              return;
            }
        
          }
        })
      }else{ 
       if(goods.length==0){
         
         goods.push(options);
         let allPrice=Number(goods[0].sum)*Number(goods[0].price.split('$')[1]);
         let all = goods.length;
         this.setData({
           goods,all,allPrice
         })
       }
        
      }
      wx.setStorageSync('goods', goods)
    }
    
    
    
  },
  getLocation(){
    wx.navigateTo({
      url: '../address/address'
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