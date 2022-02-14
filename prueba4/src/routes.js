(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig ($stateProvider, $urlRouterProvider) {
        
        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');
    
        // Set up UI States
        $stateProvider
    
        // Home Page
        .state('home', {
            url: '/',
            templateUrl: 'src/menuapp/templates/home.template.html'
        })
    
        // Category Page
        .state('categories', {
            url: '/categories',
            templateUrl: 'src/menuapp/templates/category.template.html',
            controller: 'CategoryListController as categoryList',
            resolve: {
                categories: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getAllCategories()
                }]
            }
        })
    
        // Item Page
        .state('items', {
            url: '/items/{itemSN}',
            templateUrl: 'src/menuapp/templates/item.template.html',
            controller: 'ItemListController as itemList',
            resolve: {
                items: ['$stateParams', 'MenuDataService',
                        function ($stateParams, MenuDataService) {
                            return MenuDataService.getItemsForCategory($stateParams.itemSN)
                }]
            }
        })
    
    };
    
    })();