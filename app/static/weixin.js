const config = {
  appId:'wx436b92683aa08fc3',
  title:'狗年旺旺旺',
  desc:'君银牛人闹新年！答题有奖！速赢福利！',
  link:'http://new.cjtglm.com/buildspring/index.html',
  imgUrl:'http://public.jyzqsh.com/spring/share.jpg'
}

const weixin = ({timestamp,nonceStr,signature}) => {
  let {appId,title,link,imgUrl,desc} = config
  wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: appId, // 必填，公众号的唯一标识
    timestamp:timestamp , // 必填，生成签名的时间戳
    nonceStr: nonceStr, // 必填，生成签名的随机串
    signature: signature,// 必填，签名，见附录1
    jsApiList: [
      'onMenuShareTimeline',
      'onMenuShareAppMessage'
    ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  });

  wx.ready(function(){
    wx.onMenuShareTimeline({
      title: title,
      link: link, /*分享链接*/
      imgUrl: imgUrl, /*分享图片*/
      success: function () {

      }
    });
    wx.onMenuShareAppMessage({
      title: title,
      desc: desc,
      link: link, /*分享链接*/
      imgUrl: imgUrl, /*分享图片*/
      success: function () {

      }
    });
  });

  wx.error(function(err){
    console.log(err)
    console.log('需要在微信端打开页面')
  })
}

export default weixin
