// pages/top/top.js
var fetch = require("../../comm/fetch.js")

Page({
  data:{
    films:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var _this = this; 
    
    fetch.requestFilmsByTop({},function(res){
      _this.setData({ films: res.data.subjects });
    },function(){},function(){});
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  filmDetailById: function(e){
    let id = e.currentTarget.dataset.fid;
    wx.navigateTo({
      url: '../detail/detail?id=' + id
    })
  },
  searchByTag: function(e){
    let tag = e.currentTarget.dataset.tag;
    wx.navigateTo({
      url: '../searchResult/searchResult?name=' + tag
    })
  }
})