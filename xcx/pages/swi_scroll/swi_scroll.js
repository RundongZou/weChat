// pages/swi_scroll/swi_scroll.js
Page({
  data: {
    img_urls: [
         'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    tabs: [ "0_去愛", "1_去追", "2_去成長" ],
    current: 0
  },

  swiper_to: function (ev) {
    console.log(ev);
    var current = ev.currentTarget.dataset.ind;
    this.setData({
        current: current
    })
  },
  swiper_change: function (ev) {
    console.log(ev);
    var current = ev.detail.current;
    this.setData({
        current: current
    })
  },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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