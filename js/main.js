'use strict';

window.addEventListener('offline', function (e) {
  // console.log('offlineです。');
  this.alert("端末がオフラインです。\nネットワークに接続してください。")
});


document.addEventListener('deviceready', function () {
  navigator.splashscreen.hide();
}, false);

if (window.navigator.standalone) {
  if (ons.platform.isIPhoneX()) { // iPhone X であるか否かを判定
    // <html> 要素に属性を追加（値として空文字列を設定）
    // document.documentElement.setAttribute('onsflag-iphonex-portrait', '') // 縦
    // document.documentElement.setAttribute('onsflag-iphonex-landscape', '') // 横
  }

} else {
  // document.write("このページをホームに追加してください");
}


document.addEventListener('init', function (event) {
    var page = event.target;

    if (page.id === 'Title') {
      page.querySelector('#register-btn').onclick = function () {
        document.querySelector('#signNavigator').pushPage('register.html', {
          data: {
            title: 'Register'
          }
        })
      }
    }

    if (page.id === 'Title') {
      page.querySelector('#login-btn').onclick = function () {
        document.querySelector('#signNavigator').pushPage('login.html', {
          data: {
            title: 'Login'
          }
        })
      }
    }
  }
)