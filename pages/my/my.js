// pages/my/my.js
var app = getApp();
Page({
  data:{
    my: {}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        my:userInfo
      })
      console.log(userInfo);
    });
    console.log("load")
  },
  onReady:function(){
    // 页面渲染完成
    console.log("ready")
  },
  onShow:function(){
    // 页面显示
    console.log("show")
  },
  onHide:function(){
    // 页面隐藏
    console.log("hide")
  },
  onUnload:function(){
    // 页面关闭
    console.log("unload")
  }
})