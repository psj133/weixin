import Base from '../../utils/base.js'
class Type extends Base{
  constructor(){
    super();
  }
  getTypeData(callback){
    this.axios('get','/router/getPicture')
    .then((res)=>{
        callback(res.data);
    })
  }
  getDataBytype(type,callback){
    this.axios('post', '/router/getPictureByType',{type:type})
      .then((res) => {
        if(res.err===-4){
          callback(res.data);
        }
      })
  }
  getGoodsData(id, callback) {
    // console.log(goodsId)
    this.axios('post', '/router/getPictureById', { id: id })
      .then((res) => {
        callback(res);

      })
  }
}
export default Type