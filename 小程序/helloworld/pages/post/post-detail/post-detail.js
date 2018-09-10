const postdata = require('../../../data/data.js')
Page({
  data:{

  },
  onLoad: function (options) {
    var postid = options.id;
    var postData = postdata.postList[postid]
    this.setData({postData})
    // wx.setStorageSync('key', '123')
    wx.setStorageSync('key', {
      game:'荣耀'
    })
    var postcollect = wx.getStorageSync('postcollected')
    if(postcollect){
      var collected = postcollect[postid]
      console.log(collected)
      this.setData({
        collected
      })
    }else{
      var postcollect = {}
      postcollect[postid] = false;
      wx.setStorageSync('postcollected', postcollect)
    }
  },
  onCollectTap:function(){
    var collected = wx.getStorageSync('postcollected')
    var postcollected = collected[this.data.postid]
    // var key = wx.getStorageSync('key')
    // wx.setStorageSync(key, data)
  },
  // onunCollectTap: function () {
  //   wx.removeStorageSync('key')
  // }
  
})