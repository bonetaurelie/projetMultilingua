angular.module('ProjetLangue.controllers', [])

    .controller('AccueilCtrl', function($scope) {

    })

    .controller('LoginCtrl', function($scope,$ionicPopup,$ionicModal,$state) {
      var url = "https://multilingua-c2e9b.firebaseio.com/user.json";
      $scope.user = {};

      // Create the login modal that we will use later
      $ionicModal.fromTemplateUrl('templates/tab-login.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modal = modal;
      });


      // Triggered in the login modal to close it
      $scope.closeLogin = function() {
        $scope.modal.hide();
      };

      // Open the login modal
      $scope.login = function() {
        $scope.modal.show();
      };

      $scope.doLogin = function() {
        if($scope.user.email && $scope.user.password){
          $scope.modal.hide();
          $state.go('tab.cours');
        }
      };
    })

    .controller('InscriptionCtrl', function($scope,$state,$http) {
      var url = "https://multilingua-c2e9b.firebaseio.com/user.json";
      $scope.user = getUser();
      $scope.save = function (user) {
        var postData = {
          "nom": user.nom,
          "prenom": user.prenom,
          "email": user.email,
          "password": user.password
        };
        $http.post(url,postData).success(function(data){
          $scope.user= getUser();
        });
      };

        $scope.save= function(user){
          $scope.user = getUser();
          if( $scope.user.password && $scope.user.email && $scope.user.nom && $scope.user.prenom){
            $state.go('tab.login');
          }
        };
      function  getUser(){
        $state.go('tab.login');
      }
    })

    .controller('CoursCtrl', function($scope) {
      // With the new view caching in Ionic, Controllers are only called
      // when they are recreated or on app start, instead of every page change.
      // To listen for when this page is active (for example, to refresh data),
      // listen for the $ionicView.enter event:
      //
      //$scope.$on('$ionicView.enter', function(e) {
      //});
    })

    .controller('LeconanglaisCtrl', function ($scope) {
    })

    .controller('LeconespagnolCtrl', function ($scope, $ionicPlatform, $cordovaNativeAudio) {
      var audio = [{
        id: 1,
        key: 'leçon',
        title: "Écriture des sons GA - GUE - GUI - GO - GU",
        track: 'audio/lecon.mp3'
      }];

      $scope.audioTracks = Array.prototype.slice.call(audio, 0);

      $scope.player = {
        key: '' // Holds a last active track
      };

      $ionicPlatform.ready(function() {

        $scope.playTrack = function(track, key) {
          // Preload an audio track before we play it
          $cordovaNativeAudio.preloadComplex(key, track, 1, 1, 0, function(msg) {
            // If this is not a first playback stop and unload previous audio track
            if ($scope.player.key.length > 0) {
              $cordovaNativeAudio.stop($scope.player.key); // Stop audio track
              $cordovaNativeAudio.unload($scope.player.key); // Unload audio track
            }

            $cordovaNativeAudio.play(key); // Play audio track
            $scope.player.key = key; // Set a current audio track so we can close it if needed
          }, function(msg) {
            console.log('error: ' + msg); // Loading error
          });
        };

        $scope.stopTrack = function() {
          // If this is not a first playback stop and unload previous audio track
          if ($scope.player.key.length > 0) {
            $cordovaNativeAudio.stop($scope.player.key); // Stop audio track
            $cordovaNativeAudio.unload($scope.player.key); // Unload audio track
            $scope.player.key = ''; // Remove a current track on unload, it will break an app if we try to unload it again in playTrack function
          }
        };
      });
    })

    .controller('LeconportugaisCtrl', function ($scope) {
    })

    .controller('LeconallemandCtrl', function ($scope) {
    })

    .controller('ExercicesanglaisCtrl', function ($scope) {
    })

    .controller('ExercicesespagnolCtrl', function ($scope, $ionicPlatform, $cordovaNativeAudio) {
      var audio = [{
        id: 1,
        key: 'exo',
        title: "Écriture des sons GA - GUE - GUI - GO - GU",
        track: 'audio/exo.mp3'
      }];

      $scope.audioTracks = Array.prototype.slice.call(audio, 0);

      $scope.player = {
        key: '' // Holds a last active track
      };

      $ionicPlatform.ready(function() {

        $scope.playTrack = function(track, key) {
          // Preload an audio track before we play it
          $cordovaNativeAudio.preloadComplex(key, track, 1, 1, 0, function(msg) {
            // If this is not a first playback stop and unload previous audio track
            if ($scope.player.key.length > 0) {
              $cordovaNativeAudio.stop($scope.player.key); // Stop audio track
              $cordovaNativeAudio.unload($scope.player.key); // Unload audio track
            }

            $cordovaNativeAudio.play(key); // Play audio track
            $scope.player.key = key; // Set a current audio track so we can close it if needed
          }, function(msg) {
            console.log('error: ' + msg); // Loading error
          });
        };

        $scope.stopTrack = function() {
          // If this is not a first playback stop and unload previous audio track
          if ($scope.player.key.length > 0) {
            $cordovaNativeAudio.stop($scope.player.key); // Stop audio track
            $cordovaNativeAudio.unload($scope.player.key); // Unload audio track
            $scope.player.key = ''; // Remove a current track on unload, it will break an app if we try to unload it again in playTrack function
          }
        };
      });
    })

    .controller('ExercicesportugaisCtrl', function ($scope) {
    })

    .controller('ExercicesallemandCtrl', function ($scope) {
    })

    .controller('CorrectionanglaisCtrl', function ($scope) {
    })

    .controller('CorrectionespagnolCtrl', function ($scope) {
    })

    .controller('CorrectionportugaisCtrl', function ($scope) {
    })

    .controller('CorrectionallemandCtrl', function ($scope) {
    })

    .controller('SessionsCtrl', function($scope, Events) {
      Events.get().then(function(events) {
        console.log("events", events);
        $scope.events = events;
      });
    })

    .controller('AlertesCtrl', function($scope, $cordovaLocalNotification) {
      $scope.add=function () {
        var alarmTime= new Date('08/10/2016 9:00');
        alarmTime.setMinutes(alarmTime.getMinutes() + 1);
        $cordovaLocalNotification.add({
          date: alarmTime,
          message: "Une session a lieu dans une heure",
          title: "Rappel"
        }).then(function () {
          console.log("notif ok");
        })
      };

      $scope.add=function () {
        var alarmTime= new Date('08/12/2016 15:00');
        alarmTime.setMinutes(alarmTime.getMinutes() + 1);
        $cordovaLocalNotification.add({
          date: alarmTime,
          message: "Une session a lieu dans une heure",
          title: "Rappel"
        }).then(function () {
          console.log("notif ok");
        })
      };

      $scope.add=function () {
        var alarmTime= new Date('08/18/2016 8:00');
        alarmTime.setMinutes(alarmTime.getMinutes() + 1);
        $cordovaLocalNotification.add({
          date: alarmTime,
          message: "Une session a lieu dans une heure",
          title: "Rappel"
        }).then(function () {
          console.log("notif ok");
        })
      };

      $scope.add=function () {
        var alarmTime= new Date('08/22/2016 8:00');
        alarmTime.setMinutes(alarmTime.getMinutes() + 1);
        $cordovaLocalNotification.add({
          date: alarmTime,
          message: "Une session a lieu dans une heure",
          title: "Rappel"
        }).then(function () {
          console.log("notif ok");
        })
      };

      $scope.add=function () {
        var alarmTime= new Date('08/26/2016 7:00');
        alarmTime.setMinutes(alarmTime.getMinutes() + 1);
        $cordovaLocalNotification.add({
          date: alarmTime,
          message: "Une session a lieu dans une heure",
          title: "Rappel"
        }).then(function () {
          console.log("notif ok");
        })
      };

      $scope.add=function () {
        var alarmTime= new Date('08/31/2016 12:00');
        alarmTime.setMinutes(alarmTime.getMinutes() + 1);
        $cordovaLocalNotification.add({
          date: alarmTime,
          message: "Une session a lieu dans une heure",
          title: "Rappel"
        }).then(function () {
          console.log("notif ok");
        })
      };

      $scope.add=function () {
        var alarmTime= new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 1);
        $cordovaLocalNotification.add({
          date: alarmTime,
          message: "Une session a lieu dans une heure",
          title: "Rappel"
        }).then(function () {
          console.log("notif ok");
        })
      }
    })

    .controller('ContactCtrl', function($scope,$state) {
      $scope.contact = {};
      $scope.envoi = function () {
        if (window.plugins && window.plugins.emailComposer) {
          window.plugins.emailComposer.showEmailComposerWithCallback(function (result) {
                $scope.modal.hide();
                $state.go('tab.accueil');
              },
              $scope.contact.objet,    //sujet
              "Message de " + $scope.contact.nom + $scope.contact.prenom + $scope.contact.email,  //message
              $scope.contact.message,   //message
              ["bonetaurelie@yahoo.fr"],   //to
              null,            //cc
              null,            //bcc
              false,            //ishtml
              null,             //attachments
              null              //attachmentsdata
          );
        }
      };
    });




