// pages/my/my.js
import Cart from './shopcar-model.js'
var cart=new Cart();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalPrice:0,
    totalCounts:0,
    goodsList:[],
    root:cart.baseUrl,
    loadingHidden:false,
    selAll:false
  },
  goDetails(e){
    let id=cart.dataSet(e,"id");
    wx.navigateTo({
      url: `../details/details?goodsId=${id}`,
    })
  },
  pay(e) {
    let data=cart.getData();
    // console.log(data);
    data.map((item,index)=>{
      if(item.checked){
        // console.log(item);
        wx.navigateTo({
          url: `../pay/pay?_id=${item._id}&&name=${item.name}&&type=${item.type}&&goodImg=${item.goodImg}&&price=${item.price}&&sum=${item.sum}`
        })
        if (this.data.selAll){
          wx.removeStorageSync('goodInfo')
        }else{
          let info=wx.getStorageSync('goodInfo');
          let arr=info.splice(index,1);
          wx.setStorageSync('goodInfo', info)
        }
      }else{
        wx.showToast({
          title: '您还没选择商品哦',
          icon:'none'
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     wx.setNavigationBarTitle({
       title: '购物车'
     })
      
     let data=cart.getData();
    //  console.log(data)
     this.setData({
       goodsList:data,
       loadingHidden:true
     })
  },
  refresh(){
    let goodsList = cart.getData();
    let totalCounts = cart.getTotalCounts();
    let totalPrice = cart.getAllPrice();
    // console.log(totalPrice);
    // console.log(cart.getTotalCounts());
    this.setData({
      goodsList,
      totalCounts,
      totalPrice
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  cancellSelect(){
    if (this.data.totalCounts == this.data.goodsList.length) {
      this.setData({
        selAll: true
      })
      // this.refresh();
    } else {
      this.setData({
        selAll: false
      })
      // this.refresh();
    };


  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.refresh();
    this.cancellSelect();
    
  },
  change(e){
    let id=cart.dataSet(e,"id");
    let type=cart.dataSet(e,"type")
    // console.log(type);
    cart.changeInfo(id,type,(()=>{
      this.refresh();
    }))
    /*
      点击全选后在点击单选,取消全选,所有的单选都点击后全选
    */ 
    this.cancellSelect();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  selectAll(e){
     let data=cart.getData();
     let checked=cart.dataSet(e,'checked');
    //  console.log(checked);
     data.map((item)=>{
       item.checked=checked;
       this.setData({
         selAll:item.checked
       })
      //  console.log(this.data.selAll);
       return item
     })
     wx.setStorageSync('goodInfo', data);
     this.refresh();

  }


  
 
})