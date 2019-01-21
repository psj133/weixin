import Base from "../../utils/base.js";
class Theme extends Base{
  constructor(){
    super()
  }
  getThemeById(id,callback){
    // console.log(this.dataSet)
    this.axios('post','/router/getPictureById',{id:id}).then((res)=>{
      callback(res)
    })
  }
}
export default Theme