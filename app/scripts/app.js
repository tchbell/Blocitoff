(function(){
    function config($locationProvider, $stateProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });
 
         $stateProvider
             .state('home', {
                 url: '/',
                 controller: 'HomeCtrl',
                 controllerAs: 'home', 
                 templateUrl: '/templates/home.html'
             })
            .state('addTask', {
                url: '/add_task',
                controller: "HomeCtrl",
                controllerAs: 'home',
                templateUrl: 'templates/add_tasks.html'
                   
            })
            .state('completed', {
                url: '/completed',
                controller: "HomeCtrl",
                controllerAs: 'home',
                templateUrl: 'templates/completed.html'
            })
            .state('expired', {
                url: '/expired',
                controller: "HomeCtrl",
                controllerAs: 'home', 
                templateUrl: 'templates/expired.html'
            });
        
        
     }
     
     angular
         .module('Blocitoff', ['ui.router', 'firebase'])
         .config(config);
})();

