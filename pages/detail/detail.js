// pages/detail/detail.js
var fetch = require('../../comm/fetch.js');

Page({
  data:{
    id: null,
    film: null
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    that.setData({ id: options.id});
    fetch.requestFilmsById(that.data.id,function(res){
      
      that.setData({ film: res.data});
      wx.setNavigationBarTitle({
        title: that.data.film.title
      });
    },
    function(){},
    function(){});
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
  personByDetail: function(e){
    wx.redirectTo({
      url: '../personDetail/personDetail?id=' + e.currentTarget.dataset.pid
    });
  },
  viewLarge: function(e){
    var images = e.target.dataset.src;
    wx.previewImage({
      // current: 'String', // 当前显示图片的链接，不填则默认为 urls 的第一张
      urls: [images]
    })
  }
})