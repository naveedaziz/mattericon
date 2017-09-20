var router = angular.module('materialApp.routes', ['ui.router']);
router.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    // UI Router States
    // Inserting Page title as State Param
    $stateProvider
        .state('default', {
           url: '/',
            templateUrl: 'default.html',
            params: {
               title: "Welcome to"
            }
            
        })
     
       .state('about', {
          url: '/about',
          templateUrl: 'about.html',
          params: {
             title: "About AFES"
          }
       })
       .state('organization', {
          url: '/organization',
          templateUrl: 'organization.html',
          params: {
             title: "Organization Commitee"
          }
       })
       .state('agenda', {
          url: '/agenda',
          templateUrl: 'agenda.html',
          params: {
             title: "Agenda"
          }
       })
       .state('sponsor', {
          url: '/sponsor',
          templateUrl: 'sponsor.html',
          params: {
             title: "Sponsor"
          }
       })
       .state('accomodation', {
          url: '/accomodation',
          templateUrl: 'accomodation.html',
          params: {
             title: "Accomodation"
          }
       })
       .state('social', {
          url: '/social',
          templateUrl: 'social.html',
          params: {
             title: "Connect With Us"
          }
       })
       .state('societies', {
          url: '/societies',
          templateUrl: 'societies.html',
          params: {
             title: "Society"
          }
       })
       .state('insta', {
          url: '/insta',
          templateUrl: 'insta.html',
          params: {
             title: "Photos"
          }
       })
       .state('page', {
          url: '/page/:page',
          templateUrl: 'page.html',
          params: {
             title: "page"
          }
       })
       .state('blog', {
          url: '/blog/list',
          templateUrl: 'blog.html',
          params: {
             title: "Blog"
          }
       })
       .state('alert', {
          url: '/alert',
          templateUrl: 'alert.html',
          params: {
             title: "Alerts"
          }
       })
       .state('blogdetails', {
          url: '/blogs/:page',
          templateUrl: 'blog_details.html',
          params: {
             title: "Blog"
          }
       })
       .state('campus', {
          url: '/campus',
          templateUrl: 'campus.html',
          params: {
             title: "Student Services"
          }
       })
       .state('jobs', {
          url: '/jobs',
          templateUrl: 'jobs.html',
          params: {
             title: "Jobs"
          }
       })
       .state('support', {
          url: '/support',
          templateUrl: 'support.html',
          params: {
             title: "Support"
          }
       })
       .state('admission', {
          url: '/admission',
          templateUrl: 'admission.html',
          params: {
             title: "Admission"
          }
       })
        .state('list', {
            url: '/list',
            templateUrl: '/modules/list/views/list.html',
            controller: 'listCtrl',
            controllerAs: 'List',
            params: {
                title: "List"
            }
        })
        .state('tabs', {
            url: '/tabs',
            templateUrl: '/modules/tabs/views/tabs.html',
            controller: 'tabsCtrl',
            controllerAs: 'Tabs',
            params: {
                title: "Tabs"
            }
        });

    //$locationProvider.html5Mode({ enabled: true, requireBase: false });

});
angular.module('tabsDemoDynamicHeight', ['ngMaterial']);