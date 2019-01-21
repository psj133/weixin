import Base from '../../utils/base.js'
class Search extends Base {
  constructor() {
    super();

  }
  getInputData(keyword, callback) {
    let keyVal=wx.getStorageSync('keyVal');
    if(keyVal){
      callback(keyVal);
    }else{
      this.axios('post', '/router/getPictureByKw', { keyword: keyword })
        .then((res) => {
          if (res.err == -2) {
            wx.setStorageSync("keyVal", res.data[0] )
            callback(res.data[0]);
          }
        })
    }
  }
}
export default Search