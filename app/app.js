(function(){

  'use strict';
	const app = angular.module('MuddictApp', ['ui.router','ngAnimate','ngSanitize','ui.bootstrap','youtube-embed','ngScrollbars','firebase']);

  app.config(["$locationProvider", function($locationProvider) {
  $locationProvider.html5Mode(true);
  }]);
  app.config(function($stateProvider,$urlRouterProvider){

    /**
    * Configuration des routes de mon apllication
    */

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        templateUrl: 'app/module/home/home.html',
        controller:'homeCtrl',
        controllerAs : 'home'
      })
      .state({
        name: 'categorie',
        url: '/cat',
        templateUrl: 'app/module/cat/cat.html',
        controller:'catCtrl',
        controllerAs : 'cat'
      })
      .state({
        name: 'playlist',
        url: '/cat/:name',
        templateUrl: 'app/module/playlist/playlist.html',
        /*templateUrl: function ( $stateParams ){
                    return $stateParams.url;
                },*/
        controller:'playlistCtrl',
        controllerAs : 'playlist'
      })
      .state({
        name: 'wh',
        url: '/wh',
        templateUrl: 'app/module/wh/wh.html',
        controller:'whCtrl',
        controllerAs : 'wh'
      })
      .state({
        name: 'sotd',
        url: '/sotd',
        templateUrl: 'app/module/sotd/sotd.html',
        controller:'sotdCtrl',
        controllerAs : 'sotd'
      })
      
 
  });


})();
