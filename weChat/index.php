<?php
require_once "jssdk/jssdk.php";
$jssdk = new JSSDK("wxfce8fb785da1a18a", "42428c6dee595b37c97b7186d01c5cfc");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  <title></title>
</head>
<body>
  <button id="chooseImage">选择图片</button>
  <button id="previewPic">预览图片</button>
  <button id="uploadImage">上传图片</button>
  <button id="downloadImage">下载图片</button>
  <div id="div1"></div>
  <div id="div2"></div>
  <img src="" alt="" id="myPic" width="300px">
</body>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
  /*
   * 注意：
   * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
   * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
   * 3. 常见问题及完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
   *
   * 开发中遇到问题详见文档“附录5-常见错误及解决办法”解决，如仍未能解决可通过以下渠道反馈：
   * 邮箱地址：weixin-open@qq.com
   * 邮件主题：【微信JS-SDK反馈】具体问题
   * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
   */
  wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
      // 所有要调用的 API 都要加到这个列表中
        "chooseImage","previewImage","uploadImage","downloadImage"
    ]
  });
  var aImg=[];
  wx.ready(function () {
    // 在这里调用 API
    alert("wx was ready");
    //选择图片
    document.getElementById("chooseImage").onclick=function(){
        wx.chooseImage({
            success:function(res){
              var localIds = res.localIds;//选择的图片的列表
              aImg=aImg.concat(localIds);
              document.getElementById("div1").innerHTML=aImg;
              document.getElementById("myPic").src=localIds[0];
            }
        })
    }
    //预览图片
    document.getElementById("previewPic").onclick=function(){
        wx.previewImage({
            current: aImg[0], // 当前显示图片的http链接
            urls:aImg // 需要预览的图片http链接列表
        });
        document.getElementById("div1").innerHTML=aImg[0];
    }
    //上传图片
    document.getElementById("uploadImage").onclick=function(){
        var index=0;
        upLoad();
        function upLoad(){
            wx.uploadImage({
            localId: aImg[index], // 需要上传的图片的本地ID，由chooseImage接口获得
            success: function (res) {
                var serverId = res.serverId; // 返回图片的服务器端ID
                index++;
                upLoad();
            }
        });
        }

    }
    //下载图片
    document.getElementById("downloadImage").onclick=function(){
        var index=0;
        downLoad();
        function downLoad(){
            wx.downloadImage({
                serverId: aImg[index], // 需要下载的图片的服务器端ID，由uploadImage接口获得
                isShowProgressTips: 1, // 默认为1，显示进度提示
                success: function (res) {
                    var localId = res.localId; // 返回图片下载后的本地ID
                    index++;
                    downLoad();
                }
            });
        }

    }
  });
</script>
</html>
