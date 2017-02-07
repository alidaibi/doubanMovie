let config = require("./config.js");
let util = require("../utils/util.js");
/* 热映 */
function requestFilmsByPopular(data, successCb, errorCb, completeCb) {
  wx.request({
    url: config.api_list.popular,
    data: data,
    method: 'GET',
    header: {
      "Content-Type": "application/json,application/json"
    },
    success: function (res) {
      // success
      util.isFunction(successCb) && successCb(res);
    },
    fail: function () {
      // fail
      util.isFunction(errorCb) && errorCb();
    },
    complete: function () {
      // complete
      util.isFunction(completeCb) && completeCb();
    }
  })
}
/* 待映 */
function requestFilmsByComing(data, successCb, errorCb, completeCb) {
  wx.request({
    url: config.api_list.coming,
    data: data,
    method: 'GET',
    header: {
      "Content-Type": "application/json,application/json"
    },
    success: function (res) {
      // success
      util.isFunction(successCb) && successCb(res);
    },
    fail: function () {
      // fail
      util.isFunction(errorCb) && errorCb();
    },
    complete: function () {
      // complete
      util.isFunction(completeCb) && completeCb();
    }
  })
}
/* 口碑 */
function requestFilmsByTop(data, successCb, errorCb, completeCb) {
  wx.request({
    url: config.api_list.top,
    data: data,
    method: 'GET',
    header: {
      "Content-Type": "application/json,application/json"
    },
    success: function (res) {
      // success
      util.isFunction(successCb) && successCb(res);
    },
    fail: function () {
      // fail
      util.isFunction(errorCb) && errorCb();
    },
    complete: function () {
      // complete
      util.isFunction(completeCb) && completeCb();
    }
  })
}
/* 影片详情 */
function requestFilmsById(id, successCb, errorCb, completeCb) {
  wx.request({
    url: config.api_list.filmDetail + id,
    data: {},
    method: 'GET',
    header: {
      "Content-Type": "application/json,application/json"
    },
    success: function (res) {
      // success
      util.isFunction(successCb) && successCb(res);
    },
    fail: function () {
      // fail
      util.isFunction(errorCb) && errorCb();
    },
    complete: function () {
      // complete
      util.isFunction(completeCb) && completeCb();
    }
  })
}
/* 人物详情 */
function requestPersonById(id, successCb, errorCb, completeCb) {
  wx.request({
    url: config.api_list.personDetail + id,
    data: {},
    method: 'GET',
    header: {
      "Content-Type": "application/json,application/json"
    },
    success: function (res) {
      // success
      util.isFunction(successCb) && successCb(res);
    },
    fail: function () {
      // fail
      util.isFunction(errorCb) && errorCb();
    },
    complete: function () {
      // complete
      util.isFunction(completeCb) && completeCb();
    }
  })
}
/* 根据tag查找 */
function requestSearchByTag(tag, successCb, errorCb, completeCb) {
  wx.request({
    url: config.api_list.search.byTag + tag,
    data: {},
    method: 'GET',
    header: {
      "Content-Type": "application/json,application/json"
    },
    success: function (res) {
      // success
      util.isFunction(successCb) && successCb(res);
    },
    fail: function () {
      // fail
      util.isFunction(errorCb) && errorCb();
    },
    complete: function () {
      // complete
      util.isFunction(completeCb) && completeCb();
    }
  })
}
module.exports = {
  requestFilmsByPopular: requestFilmsByPopular,
  requestFilmsById: requestFilmsById,
  requestPersonById: requestPersonById,
  requestSearchByTag: requestSearchByTag,
  requestFilmsByComing: requestFilmsByComing,
  requestFilmsByTop: requestFilmsByTop
}