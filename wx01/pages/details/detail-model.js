import Base from '../../utils/base.js'
class Details extends Base{
  constructor(){
    super();
  }
  getGoodsData(id,callback){
    // console.log(goodsId)
    console.log(id);
    this.axios('post', '/router/getPictureById', { id: id})
    .then((res)=>{
      console.log(res);
      callback(res);
     
    })
  }
}
export default Details