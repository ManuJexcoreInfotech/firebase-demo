// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-material', 'ngCordova', 'app.controllers']);

app.run(function ($ionicPlatform) {
	
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
		FCMPlugin.getToken(
			function (token) {
				alert('Token: ' + token);
				console.log('Token: ' + token);
			},
			function (err) {
				alert('error retrieving token: ' + token);
				console.log('error retrieving token: ' + err);
			}
		);

		FCMPlugin.onNotification(
			function(data){
				if(data.wasTapped){
		//Notification was received on device tray and tapped by the user.
					alert("Tapped: " +  JSON.stringify(data) );
				}else{
		//Notification was received in foreground. Maybe the user needs to be notified.
					alert("Not tapped: " + JSON.stringify(data) );
				}
			},
			function(msg){
				alert('onNotification callback successfully registered: ' + msg);
				console.log('onNotification callback successfully registered: ' + msg);
			},
			function(err){
				alert('Error registering onNotification callback: ' + err);
				console.log('Error registering onNotification callback: ' + err);
			}
		);
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.lists', {
        url: '/lists',
        views: {
            'menuContent': {
                templateUrl: 'templates/lists.html',
                controller: 'ListsCtrl'
            }
        }
    })

    .state('app.ink', {
        url: '/ink',
        views: {
            'menuContent': {
                templateUrl: 'templates/ink.html',
                controller: 'InkCtrl'
            }
        }
    })

    .state('app.motion', {
        url: '/motion',
        views: {
            'menuContent': {
                templateUrl: 'templates/motion.html',
                controller: 'MotionCtrl'
            }
        }
    })

    .state('app.components', {
        url: '/components',
        views: {
            'menuContent': {
                templateUrl: 'templates/components.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.extensions', {
        url: '/extensions',
        views: {
            'menuContent': {
                templateUrl: 'templates/extensions.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/components');
});
