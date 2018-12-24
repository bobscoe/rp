(function() {
  angular
    .module('app.splash')
    .controller('SplashCtrl', Splash);

  function Splash() {
    var vm = this;
    vm.msg = "MERRY CHRIHMUS!";
    activate();
    //------------------//
    function activate() {}
  }
})();