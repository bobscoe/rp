(function() {
  angular
    .module('app.core')
    .config(configure);

  function configure($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'app/splash/splash.html',
        controller: 'SplashCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});
  }
})();