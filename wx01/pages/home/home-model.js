import Base from '../../utils/base.js'
class Home extends Base{
  constructor(){
    super();

  }
  getData(callback){
    let home = wx.getStorageSync('home')
    if (home) {
      callback(home)
    } else {
      this.axios('get','/router/getPicture')
      .then((res)=>{
        wx.setStorageSync('home', res)
        callback(res);
      })
    }
  }
  getInputData(keyVal,callback){
    // console.log(keyVal)
    let keyword=wx.getStorageSync("keyword")
    console.log(keyword);
    if(keyword){
        callback(keyword);
    }else{
      this.axios('post', '/router/getPictureByKw', { keyVal, keyVal })
        .then((res) => {
          wx.setStorageSync('keyword', res);
          callback(res);
        })
    }
    }

}
export default Home