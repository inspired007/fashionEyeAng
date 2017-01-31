(function(){
    var app = angular.module('fashionStore', ['store-products']);

    app.controller('StoreController', ['$http',function($http){
        var store = this;

        store.products = [ ];

        $http.get('products.json').then(
            function success(response) {
                var data = response.data;
                store.products = data;
                return data;
            });
    }]);




    app.controller("ReviewController", function(){
        this.review = {};

        this.addReview = function (product) {

            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {}; //Clear form
        };
    });



})();