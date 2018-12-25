(function() {
  angular
    .module('app.splash')
    .controller('SplashCtrl', Splash);

  function Splash() {
    var vm = this;
    vm.msg = "Site Coming Soon!";
    vm.tableData = [
      {id:'apple_music', url:'https://itunes.apple.com/us/artist/reggie-pearl/1441847594', icon:'am', verb:"Stream"},
      {id:'spotify', url:'https://open.spotify.com/artist/0bqF0eDCWNkie7lHRS9fDe?si=yPEOEGiYSMi0hr_Uh9AUjw', icon:'s', verb:"Stream"},
      {id:'soundcloud', url:'https://m.soundcloud.com/reggie-pearl', icon:'sc', verb:"Stream"},
    ]
    activate();
    //------------------//
    function activate() {}
  }
})();