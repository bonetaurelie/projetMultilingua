// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('ProjetLangue', ['ionic','ProjetLangue.controllers', 'ProjetLangue.services','ngCordova', 'ngMessages'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

    .config(function($stateProvider, $urlRouterProvider) {

      // Ionic uses AngularUI Router which uses the concept of states
      // Learn more here: https://github.com/angular-ui/ui-router
      // Set up the various states which the app can be in.
      // Each state's controller can be found in controllers.js
      $stateProvider

      // setup an abstract state for the tabs directive
          .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'templates/tabs.html'
          })

          // Each tab has its own nav history stack:

          .state('tab.accueil', {
            url: '/accueil',
            views: {
              'tab-accueil': {
                templateUrl: 'templates/tab-accueil.html',
                controller: 'AccueilCtrl'
              }
            }
          })

          .state('tab.login', {
            url: '/login',
            views: {
              'tab-login': {
                templateUrl: 'templates/tab-login.html',
                controller: 'LoginCtrl'
              }
            }
          })

          .state('inscription', {
            url: '/inscription',
            templateUrl: 'templates/inscription.html',
            controller: 'InscriptionCtrl'
          })

          .state('tab.cours', {
            url: '/cours',
            views: {
              'tab-cours': {
                templateUrl: 'templates/tab-cours.html',
                controller: 'CoursCtrl'
              }
            }
          })

          .state('leconanglais', {
            url: '/leconanglais',
            templateUrl: 'templates/leconanglais.html',
            controller: 'LeconanglaisCtrl'
          })

          .state('leconespagnol', {
            url: '/leconespagnol',
            templateUrl: 'templates/leconespagnol.html',
            controller: 'LeconespagnolCtrl'
          })

          .state('leconportugais', {
            url: '/leconportugais',
            templateUrl: 'templates/leconportugais.html',
            controller: 'LeconportugaisCtrl'
          })

          .state('leconallemand', {
            url: '/leconallemand',
            templateUrl: 'templates/leconallemand.html',
            controller: 'LeconallemandCtrl'
          })

          .state('exercicesanglais', {
            url: '/exercicesanglais',
            templateUrl: 'templates/exercicesanglais.html',
            controller: 'ExercicesanglaisCtrl'
          })

          .state('exercicesespagnol', {
            url: '/exercicesespagnol',
            templateUrl: 'templates/exercicesespagnol.html',
            controller: 'ExercicesespagnolCtrl'
          })

          .state('exercicesportugais', {
            url: '/exercicesportugais',
            templateUrl: 'templates/exercicesportugais.html',
            controller: 'ExercicesportugaisCtrl'
          })

          .state('exercicesallemand', {
            url: '/exercicesallemand',
            templateUrl: 'templates/exercicesallemand.html',
            controller: 'ExercicesallemandCtrl'
          })

          .state('correctionanglais', {
            url: '/correctionanglais',
            templateUrl: 'templates/correctionanglais.html',
            controller: 'CorrectionanglaisCtrl'
          })

          .state('correctionespagnol', {
            url: '/correctionespagnol',
            templateUrl: 'templates/correctionespagnol.html',
            controller: 'CorrectionespagnolCtrl'
          })

          .state('correctionportugais', {
            url: '/correctionportugais',
            templateUrl: 'templates/correctionportugais.html',
            controller: 'CorrectionportugaisCtrl'
          })

          .state('correctionallemand', {
            url: '/correctionallemand',
            templateUrl: 'templates/correctionallemand.html',
            controller: 'CorrectionallemandCtrl'
          })

          .state('tab.sessions', {
            url: '/sessions',
            views: {
              'tab-sessions': {
                templateUrl: 'templates/tab-sessions.html',
                controller: 'SessionsCtrl'
              }
            }
          })

          .state('tab.alertes', {
            url: '/alertes',
            views: {
              'tab-alertes': {
                templateUrl: 'templates/tab-alertes.html',
                controller: 'AlertesCtrl'
              }
            }
          })

          .state('tab.contact', {
            url: '/contact',
            views: {
              'tab-contact': {
                templateUrl: 'templates/tab-contact.html',
                controller: 'ContactCtrl'
              }
            }
          });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/tab/accueil');

    });
