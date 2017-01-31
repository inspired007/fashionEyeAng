(function(){
    var app = angular.module('store-products', []);


    app.directive('productGallery', function(){
        return{
            restrict: 'E',
            templateUrl: 'product-gallery.html',
            controller: function(){
                this.current = 0;
                this.setCurrent = function(newGallery){
                    this.current = newGallery || 0;
                };
            },
            controllerAs: 'gallery'
        };
    });


    app.directive('productDescription', function(){
        return{
            restrict: 'E',
            templateUrl: 'product-description.html'
        };
    });
    app.directive('productSpecs', function(){
        return{
            restrict: 'A',
            templateUrl: 'product-specs.html'
        };
    });
    app.directive('productReviews', function(){
        return{
            restrict: 'E',
            templateUrl: 'product-reviews.html'
        };
    });

    app.directive('productTabs', function(){
        return{
            restrict: 'E',
            templateUrl: 'product-tabs.html',
            controller: function(){
                this.panel = 1;
                this.selectTab = function(setTab){
                    this.panel = setTab;
                };
                this.isSet = function(checkTab){
                    return this.panel === checkTab;
                };
            },
            controllerAs: 'panel'
        };
    });

})();