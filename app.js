//app.js
var config = require('comm/config.js');
var util = require("utils/util.js");

App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
  getCity: (cb) =>{
    var that = this;
    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res){
        // success
        var locationParam = res.latitude + ',' + res.longitude + '1';
        wx.request({
            url: config.api_list.baiduMap,
            data: {
                ak: config.baiduAK,
                location: locationParam,
                output: 'json',
                pois: '1'
            },
            method: 'GET',
            success: (res)=>{
                config.city = res.data.result.addressComponent.city.slice(0,-1);
                util.isFunction(cb) && cb(config.city);
            },
            fail: ()=>{
                that.getCity(cb);
            }
        });
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
}
})