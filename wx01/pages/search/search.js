import Search from './search-model.js'
var search=new Search();
Page({
  data: {
    img:'',
    name:'',
    type:'',
    notFind:'',
    root:search.baseUrl,
    loadingHidden:false,
    id:""
  },
  go(e) {
    let obj = search.dataSet(e);
    wx.navigateTo({
      url: `../details/details?goodsId=${obj.id}`,

    })
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '搜索结果',
    })
    let keyword=options.result;
    search.getInputData(keyword,(res)=>{
      if(!res){
          this.setData({
            notFind:"抱歉,貌似没找到"
          })
          wx.showToast({
            title: '找不到了'
          })
      }else{
        this.setData({
          img:res.path,
          name:res.name,
          type:res.type,
          loadingHidden:true,
          id:res._id
        })
      }
    })
  },

})