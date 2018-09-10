const postdata = require('../../data/data.js')
Page({
  onLoad: function(options) {
    console.log(postdata)
    this.setData({
      postkey: postdata.postList
    })
  },
  onPost:function(event){
    const postid = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: 'post-detail/post-detail?id='+postid,
    })
  }
})