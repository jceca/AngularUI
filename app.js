/**
 * Created by Javier on 04/10/2014.
 */
/*
angular
    .module('guide', ['ui.router'])

// Configuración de las rutas
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/mainPage.html',
                controller: 'mainCtrl'
            })
            .state('about', {
                url:'/about',
                templateUrl: 'views/about.html',
                controller: 'aboutCtrl'
            })
    }]);
    */

angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('AccordionDemoCtrl', function ($scope) {
    $scope.oneAtATime = true;

    $scope.groups = [
        {
            title: 'Dynamic Group Header - 1',
            content: 'Dynamic Group Body - 1'
        },
        {
            title: 'Dynamic Group Header - 2',
            content: 'Dynamic Group Body - 2'
        }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };
});