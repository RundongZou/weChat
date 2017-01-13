// pages/file/file.js
Page({
  data:{},
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
  },
  upload: function () {
    var _this = this;
     wx.chooseImage({
      success: function(res) {
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'https://zourundong.duapp.com/xcx/upload.php', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData:{
            'user': 'test'
          },
          header: {
            'content-type': 'multipart/form-data'
          },
          success: function(res){
            //do something
            console.log(res);
            var data = res.data.replace(/\s/g,"");
            _this.setData({
                img_url: data
            })            
          },
          fail: function (res) {
            console.log(res);
          }
        })
      }
    })
  }
 
})