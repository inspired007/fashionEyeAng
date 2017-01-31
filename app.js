(function(){
    var app = angular.module('fashionStore', ['store-products']);
    app.controller('StoreController', function(){
        this.products = glasses;
    });



    var glasses = [{
        name: 'SO REAL',
        brand: 'Christian Dior',
        description: "sunglasses are characterised by their deconstructed pantos shape that harmoniously blends architectural lines and couture spirit. The extremely lightweight frame consists of a black front and slender fuchsia havana acetate temples.The pink semi-mirrored lenses ensure 100% UV protection. ",
        country: 'Italy',
        price: 499,
        frameMaterial: 'Metal',
        frameColor: 'gold black havana',
        lensColor: 'grey',
        protection: 100,
        canPurchase: true,
        soldOut: false,
        images: [
            "images/dior/sun-2.jpg",
            "images/dior/sun-5.jpg",
            "images/dior/sun-9.jpg"
        ],
        reviews: [{
            stars: 5,
            body: "I love this brand!",
            author: "joe@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "This design sucks.",
            author: "tim@example.org",
            createdOn: 1397490980837
        }]
    },
        {
            name: 'DIORAMA CLUB',
            brand: 'Christian Dior',
            description: "The Diorama Club sunglasses feature a rounded shape and are characterised by their lightness and elegant modernity. The front features two superimposed layers of ultra-thin metal, one navy blue and the other metallic pink, between which the lenses appear to float. The delicately openworked pink metal temples offer a novel interpretation of the emblematic cannage motif.",
            country: 'Italy',
            price: 391,
            frameMaterial: 'Metal',
            frameColor: 'gold black havana',
            lensColor: 'grey',
            protection: 100,
            canPurchase: true,
            soldOut: false,
            images: [
                "images/dior/sun-1.jpg",
                "images/dior/sun-3.jpg",
                "images/dior/sun-4.jpg"
            ],
            reviews: [{
                stars: 3,
                body: "I think this sunglasses was just OK, could honestly use more shine, IMO.",
                author: "JimmyDean@example.org",
                createdOn: 1397490980837
            }, {
                stars: 4,
                body: "This sunglasses is for me!",
                author: "Rock@example.org",
                createdOn: 1397490980837
            }]
        }, {
            name: 'UMBRAGE',
            brand: 'Christian Dior',
            description: "The DiorUmbrage sunglasses from the Winter 2016-2017 fashion show feature mirrored lenses reflecting a bold and graphic foliage pattern. Developed exclusively for Dior, they demonstrate cutting-edge craftsmanship. The retro-futuristic round front is a juxtaposition of havana acetate, while the metal temples are adorned with sophisticated details.",
            country: 'Italy',
            price: 419,
            frameMaterial: 'Metal',
            frameColor: 'gold black havana',
            lensColor: 'green',
            protection: 100,
            canPurchase: true,
            soldOut: false,
            images: [
                "images/dior/sun-6.jpg",
                "images/dior/sun-7.jpg",
                "images/dior/sun-10.jpg"
            ],
            reviews: [{
                stars: 1,
                body: "This glasses is WAY too expensive for its rarity value.",
                author: "turtleguyy@example.org",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "BBW: High Brand != High Quality.",
                author: "LouisW407@example.org",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "Don't waste your dollars!",
                author: "nat@example.org",
                createdOn: 1397490980837
            }]

        }];

})();