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

    app.controller("ReviewController", function(){
        this.review = {};

        this.addReview = function (product) {

            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {}; //Clear form
        };
    });

    /*    app.controller('PanelController', function(){
     this.tab = 1;
     this.selectTab = function(setTab){
     this.tab = setTab;
     };
     this.isSet = function(checkTab){
     return this.tab === checkTab;
     };
     });*/

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