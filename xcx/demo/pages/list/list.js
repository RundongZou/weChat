// pages/list/list.js
Page({
  data: {
        not_refresh: true,
        not_more: true,
        tab_data: [],
        list_data: []
      },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var _this = this;
    //數據請求
    wx.request({
      //http://datainfo.duapp.com/shopdata/getGoods.php
      // url: "https://liaman.duapp.com/footerball/mock/list.json",
      url: "http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
      header: {
        'content-type': "application/json"
      },
      // rp->response
      success: function (rp) {
          var _data = JSON.parse(rp.data.slice(1, rp.data.length-1));
          console.log(JSON.parse(rp.data.slice(1, rp.data.length-1)));
          //var _data = rp.data;
          // 數據請求成功以後，setData
          _this.setData({
            list_data: _data 
          })
      }
    })
  },
  onPullDownRefresh: function(){
    console.log("刷新");
    var _this = this;
    this.setData({
        not_refresh: false
    })
    setTimeout(function () {{
        wx.stopPullDownRefresh();
        _this.setData({
            not_refresh: true
        })
    }
    }, 300)
  },

  onReachBottom: function () {
    console.log("加載");
    var _this = this;
    this.setData({
        not_more: false
    });

    setTimeout(function () {
        wx.request({
          //http://datainfo.duapp.com/shopdata/getGoods.php
          // url: "https://liaman.duapp.com/footerball/mock/list.json",
          url: "http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
          header: {
            'content-type': "application/json"
          },
          // rp->response
          success: function (rp) {
              var _data = JSON.parse(rp.data.slice(1, rp.data.length-1));
              console.log(JSON.parse(rp.data.slice(1, rp.data.length-1)));
              //var _data = rp.data;
              // 數據請求成功以後，setData
              _this.setData({
                list_data: _this.data.list_data.concat(_data),  
                not_more:true
              })
          }
        })
    }, 1000)
  },

  itemTap: function (ev) {
    console.log("tap");
    console.log(ev);
    console.log(ev.currentTarget.id);

    wx.navigateTo({
      url: '../detail/detail?id=' + ev.currentTarget.id
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