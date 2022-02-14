(function () {
    'use strict';
    
    angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('CatApiEndpoint', 'https://davids-restaurant.herokuapp.com/categories.json')
    .constant('ItemApiEndpoint', 'https://davids-restaurant.herokuapp.com/menu_items.json');
    
    MenuDataService.$inject = ['$http', 'CatApiEndpoint', 'ItemApiEndpoint'];
    function MenuDataService ($http, CatApiEndpoint, ItemApiEndpoint) {
        var service = this;
    
        service.getAllCategories = function () {
            var response = $http ({
                method: 'GET',
                url: CatApiEndpoint
            });
    
            return response
        };
    
        service.getItemsForCategory = function (categoryShortName) {
            var response = $http ({
                method: 'GET',
                url: ItemApiEndpoint,
                params: {category: categoryShortName}
            });
    
            return response
        };
    };
    
    })();