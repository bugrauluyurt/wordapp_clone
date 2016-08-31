'use strict';

angular.module('wordapp',['ui.bootstrap', 'ngAnimate'])

// allow DI for use in controllers, unit tests
  .constant('_', window._)
  // use in views, ng-repeat="x in _.range(3)"
  .run(function ($rootScope) {
     $rootScope._ = window._;
  })

// CTRL - NavCtrl
  .controller('NavCtrl', function NavCtrl() {

    var navCtrl = this;

    navCtrl.languages = [
      'English',
      'Swedish',
      'Turkish'
    ];

  })

  .service('tasksFeed', function() {
    var tasksFeed = this;

    tasksFeed.tasks = [
      {
          id: 0,
          projectname: 'Lekmer.se 300 w + meta kategoritexter',
          type: 'Lekmer.se 300 w + meta kategoritexter',
          publicity: 'public',
          role: 'Writer',
          payment: 6.21,
          currency: 'SEK',
          keywords: {
            main: 'Babyskydd',
            sub: 'Lekmer.se,,,,Babyskydd 0 kg - 13 kg,bilbarnstol,Maxi-Cosi babyskydd,babyskydd till bil,Besafe babyskydd,med handtag,Maxi-Cosi i Sverige'
          },
          persona: 'blivande föräldrar (vissa varumärken/produktgrupper) och föräldrar till barn upp till 8 år. Kvinnor 25-45 är huvudmålgruppen',
          pageURL: '',
          sampletext: ''
      },
      {
          id: 1,
          projectname: 'Dustin- 75 ords säljande ingress (enkelt)',
          type: 'Content writing',
          publicity: 'public',
          role: 'Writer',
          payment: 13.50,
          currency: 'SEK',
          keywords: {
            main: '3DConnexion SpaceNavigator Optisk 3D rörelsestyrenhet',
            sub: '3DConnexion'
          },
          persona: 'Målgrupp är företag som är ute efter elektronik till bra priser.',
          pageURL: '',
          sampletext: ''
      },
      {
          id: 2,
          projectname: 'Lekmer.se 300 w + meta kategoritexter',
          type: 'Content writing',
          publicity: 'public',
          role: 'Writer',
          payment: 5.71,
          currency: 'EUR',
          keywords: {
            main: 'Bärselar',
            sub: 'Lekmer.se,,,,Bärselar,ergonomisk bärsele,bärsele,ekologisk bärsele,Babybjörn,bärsele till nyfödd,bra bärsele'
          },
          persona: 'blivande föräldrar (vissa varumärken/produktgrupper) och föräldrar till barn upp till 8 år. Kvinnor 25-45 är huvudmålgruppen',
          pageURL: '',
          sampletext: ''
      },
      {
          id: 3,
          projectname: 'Informationstexter om Åsa Schwarz 500 ord + meta & bild',
          type: 'Content writing',
          publicity: 'public',
          role: 'Writer',
          payment: 12,
          currency: 'EUR',
          keywords: {
            main: 'böcker',
            sub: 'Åsa Schwarzs böcker,,'
          },
          persona: 'En sajt om Åsa Schwarz',
          pageURL: '',
          sampletext: ''
      },
      {
          id: 4,
          projectname: 'Informationstexter om öl 500 ord + meta & bild',
          type: 'Content writing',
          publicity: 'public',
          role: 'Writer',
          payment: 15,
          currency: 'EUR',
          keywords: {
            main: 'brygga',
            sub: 'Brygga öl hemma,,'
          },
          persona: 'En sajt om öl',
          pageURL: '',
          sampletext: ''
      },
      {
          id: 5,
          projectname: 'Informationstexter om svensk sjukvård 500 ord + meta & bild',
          type: 'Content writing',
          publicity: 'private',
          role: 'Writer',
          payment: 10,
          currency: 'EUR',
          keywords: {
            main: 'papperslösa',
            sub: 'Diskussionen kring papperslösa och allas rätt till sjukvård,,'
          },
          persona: 'En sajt om svensk sjukvård',
          pageURL: '',
          sampletext: ''
      }

    ];

  })

// CTRL - ProfileHudCtrl
  .controller('profileHudCtrl', function profileHudCtrl() {
    var profileHudCtrl = this;
  // profile hud functions should go in here
  })

// CTRL - TasksFeedCtrl
  .controller('tasksFeedCtrl', function tasksFeedCtrl(tasksFeed, $window) {
    var tasksFeedCtrl = this;

    tasksFeedCtrl.winHeight = $window.innerHeight - 200;
    tasksFeedCtrl.tasks = tasksFeed.tasks;
    tasksFeedCtrl.selectedId = 0;
    tasksFeedCtrl.isVisible = true;
    tasksFeedCtrl.selectedTask = tasksFeedCtrl.tasks[0];

    tasksFeedCtrl.fetchTask = function() {
      var idSelected = tasksFeedCtrl.selectedId;
      var selectedTask = _.find(tasksFeedCtrl.tasks, function(task) {
          return task.id === idSelected;
      });
      tasksFeedCtrl.selectedTask = selectedTask;
    };

    tasksFeedCtrl.select = function(index) {
      tasksFeedCtrl.selectedId = index;
      tasksFeedCtrl.isVisible = true;
    };

    tasksFeedCtrl.toggleVisibility = function(){
      tasksFeedCtrl.isVisible = !tasksFeedCtrl.isVisible;
    };




  })




;
