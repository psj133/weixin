// pages/details/details.js
import Details from './detail-model.js';
var details=new Details();
import Cart from '../shopcar/shopcar-model.js'
var cart=new Cart();
Page({

  /**
   * 页面的初始数据
   */
  data: {
     goodImg:'',
     root:details.baseUrl,
     loadingHidden:false,
     name:'',
     type:'',
     count:5,
     array:[1,2,3,4,5,6,7,8,9],
     list:[],
     _id:0,
     selectCounts:0
  },
  joinCart(e){
     let price =details.dataSet(e,'price');
     let counts=details.dataSet(e,'counts');
      let sum=counts+this.data.selectCounts;
    this.setData({ selectCounts: sum})
    //  console.log(e);
    //  console.log(price,counts);
    // console.log(this.data.list)
    // let info=this.data.list;
    // let arr=[];
    // arr.push({info,price,sum});
    let {_id,type,name,goodImg}=this.data;
    // wx.setStorageSync('goodInfo', arr);
    // console.log(this.data);
    // let  infos=wx.getStorageSync('goodInfo');
    // console.log(infos);
    cart.addCart({ _id, type, name, goodImg ,price,sum});
  },
  back(){
    wx.navigateBack({
      url:'../home/home'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '商品详情',
    })
    // console.log(cart);
    this.setData({selectCounts:cart.getTotal()})
    // console.log(options.goodsId)
    let id = options.goodsId;
 
    details.getGoodsData(id,(res)=>{
      if(res.err===0){
        // console.log(res);
        this.setData({
          goodImg:res.data[0].path,
          list:res.data,
          _id:res.data[0]._id,
          loadingHidden:true,
          name: res.data[0].name,
          type: res.data[0].type
        })
      }
    });
  },
  changeNum(e){
     let index=details.detail(e);
     let num=this.data.array[index];
     this.setData({count:num})
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
    // console.log('页面卸载了')
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