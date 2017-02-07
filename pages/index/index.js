//index.js
//获取应用实例
let config = require("../../comm/config.js");
let fetch = require("../../comm/fetch.js");

let app = getApp()
Page({
  data: {
    bannerList: config.bannerList,
    films: []
  },
  onLoad: function(){
    let _this = this;
    app.getCity(function (address){
      
      wx.setNavigationBarTitle({
        title: '正在热映 - ' + config.city
      });
      fetch.requestFilmsByPopular({
            city: config.city,
            count: 20,
            start: 0
          },function (res){
            _this.setData({ films: res.data.subjects });
          },function (){

          },function (){
            
          });
    });  
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
