import config from './config.js'
class Base{
  constructor(){
    this.baseUrl=config.baseUrl;
  }
  //封装数据请求
  axios(method,url,data){
    return new Promise((resolve,reject)=>{
      wx.request({
        url: this.baseUrl + url,
        method: method || 'get',
        data: data || '',
        success(res){
          if(res.statusCode==200){
            resolve(res.data);
          }else{
            reject(res);
          }
        },
        fail(err){
          reject(err);
        }
      })
    })
  }
  dataSet(e, key) {
    if (key) {
      return e.currentTarget.dataset[key]
    } else {
      return e.currentTarget.dataset
    }

  }
  detail(e){
    return e.detail.value
  }
}
export default Base;