// pages/swi_scroll/swi_scroll.js
Page({
  data: {
    img_urls: [
         'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
       'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    tabs: [ "0_去愛", "1_去追", "2_去成長", "3_top", "4_bottom", "5_me" ],
    current: 0,
    scroll_x: true,
    scroll_left: 100
  },

  swiper_to: function (ev) {
    console.log(ev);
    var current = ev.currentTarget.dataset.ind;
    this.setData({
        current: current
    })
  },
  swiper_change: function (ev) {
    console.log("ev: " + ev);
    console.log("windowWidth: " + this.data.windowWidth);
    var current = ev.detail.current;
    var left = ev.detail.current * 84 - (this.data.windowWidth / 2) + 42;
    this.setData({
        current: current,
        scroll_left: left
    })
  },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var _this = this;
    //獲取設備信息
    wx.getSystemInfo({
        success: function (res) {
            //窗口的寬度
            console.log(res.windowWidth);
            _this.setData({
                windowWidth: res.windowWidth
            })
        }
    })
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
  }
})