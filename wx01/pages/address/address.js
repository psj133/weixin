// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     name:'',
     phone:'',
     area:'',
     address:'',
     email:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.setNavigationBarTitle({
        title: '编辑收货地址'
      })

  },
  saveInfo(){
    let obj=this.data;
    wx.navigateTo({
      url:`../pay/pay?person=${obj.name}&phone=${obj.phone}&address=${obj.address}&area=${obj.area}&email=${obj.email}`
    })
    
  },
  
  getPerson(e){
    let name=e.detail.value;
    this.setData({
      name
    })
    
  },
  getPhone(e){
    let phone = e.detail.value;
    this.setData({
      phone
    })
  },
  getArea(e){
    let area=e.detail.value;
    // console.log(e);
    this.setData({
      area
    })
  },
   getAddress(e) {
    let address = e.detail.value;
    this.setData({
      address
    })
  },
  getEmail(e) {
    let email = e.detail.value;
    this.setData({
      email
    })
  }



})