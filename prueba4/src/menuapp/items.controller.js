(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('ItemListController', ItemListController);
    
    ItemListController.$inject = ['items'];
    function ItemListController (items) {
        var itemList = this;
    
        itemList.category = items.data.category.name;
        itemList.items = items.data.menu_items;
    };
    
    })();