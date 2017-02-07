// pages/personDetail/personDetail.js
var fetch = require("../../comm/fetch");

Page({
  data:{
    id: null,
    person: null
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    that.setData({id: options.id });
    fetch.requestPersonById(that.data.id,function(res){
      that.setData({ person: res.data });
    },function(){},function(){})
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
  goFilmDetailById: function(e){
    wx.redirectTo({
      url: '../detail/detail?id=' + e.currentTarget.dataset.fid
    })
  }
})