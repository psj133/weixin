import Base from '../../utils/base.js'
class Cart extends Base{
  constructor(){
    super()
  }
  addCart(goods){
    // console.log(goods);
    goods.checked=false;
    // console.log(goods);
    let cart=wx.getStorageSync('goodInfo')||[];
    // console.log(cart);
    let isHas=this.isExit(goods);
    if(isHas){
      cart.map((item)=>{
       if(item._id===goods._id){
           item.sum+=goods.sum;
       }
       return item;
      })
    }else{
      // console.log("不存在")
      cart.push(goods);
    }
    wx.setStorageSync("goodInfo", cart);
  

   
   

  }
  isExit(newData){
    let data=wx.getStorageSync('goodInfo')||[];
    

    let num=data.some((item)=>{
      // console.log(item);
      return item._id==newData._id;
    })
    return num;
  }
  getData(){
    return wx.getStorageSync('goodInfo')||[];
  }
  getTotal(){
    let data = wx.getStorageSync('goodInfo') || [];
    let total=0;
    for(var i in data){
      total+=data[i].sum;
    }
    return total;
  }
  changeInfo(id,type,callback){
    // console.log(id,type);
    let cart=this.getData();
    // console.log(cart)
    let newdata=this.changeData(cart,id,type,callback);
    // console.log(newdata);
    wx.setStorageSync('goodInfo', newdata)
    callback();
  }
  changeData(cart,id,type,callback){
     let data=cart.filter((item)=>{
        if(item._id==id){
          switch(type){
            case 'checked':
            item.checked=!item.checked;
            // console.log(item.checked);
            break
            case "add":
            //  console.log(item.sum);
              item.sum++;
            break
            case "jian":
            if(item.sum>1){
              item.sum--;
            }else{
              wx.showModal({
                title: '删除',
                content: '确定要删除吗？',
                success:(res)=>{
                  
                 if(res.confirm){
                   let data = this.deleteData(cart, id);
                   wx.setStorageSync('goodInfo', data);
                   callback();
                 }
                }
              })
            }
            break
          }
        }
        return true;
     })
     return data;
  }
  deleteData(cart,id){
    let data = cart.filter((item) => {
      if (item._id === id) {
        return false
      } else {
        return true
      }
    })
    return data
    //  console.log(data);
    
  }
  getTotalCounts(){
    let cart=this.getData();
    let num=0;
    cart.map((item)=>{
      if(item.checked){
        num++;
      }
    })
    return num;
  }
  getAllPrice(){
    let cart = this.getData();
    let price=0;
    cart.map((item)=>{
      // console.log(item.checked);
      if (item.checked){
        let singlePrice = (item.price).split("$")[1];
        price+=item.sum*Number(singlePrice);
      }
    })
    return price;
  }
}
export default Cart;