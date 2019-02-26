let webShopApp = new Vue({
    el: '#shop-app',
    data: {
        cart: [],
        products: [{
                productId: 1,
                brand: "Tom Dixon",
                product: 'Melt mini',
                onsale: true,
                details: ["Sockel: 27Ø", "Width: 40cm", "Hight: 40cm", "Cable length: 2M", "Materials: Steel and glass"],
                variants: [{
                        variantId: 1,
                        variantColor: "Gold",
                        variantImage: "./images/goldL.jpg",
                        variantQuanitity: 10
                    }, {
                        variantId: 2,
                        variantColor: "Silver",
                        variantImage: "./images/silverL.jpg",
                        variantQuanitity: 2
                    },
                    {
                        variantId: 3,
                        variantColor: "Pink",
                        variantImage: "./images/roseL.jpg",
                        variantQuanitity: 4
                    },
                    {
                        variantId: 4,
                        variantColor: "Grey",
                        variantImage: "./images/smokeL.jpg",
                        variantQuanitity: 0
                    }
                ],

            },
            {
                productId: 2,
                brand: "Tom Dixon",
                product: 'Fade',
                onsale: true,
                details: ["Sockel: 27Ø", "Width: 20cm", "Hight: 40cm", "Cable length: 3M", "Materials: Steel and glass"],
                variants: [{
                        variantId: 1,
                        variantColor: "Silver",
                        variantImage: "./images/silverD.jpg",
                        variantQuanitity: 10
                    }, {
                        variantId: 2,
                        variantColor: "pink",
                        variantImage: "./images/roseD.jpg",
                        variantQuanitity: 2
                    },
                    {
                        variantId: 3,
                        variantColor: "Gold",
                        variantImage: "./images/goldD.jpg",
                        variantQuanitity: 4
                    }
                ],

            },
            {
                productId: 3,
                brand: "Tom Dixon",
                product: 'Void',
                onsale: true,
                details: ["Sockel: 27Ø", "Width: 20cm", "Hight: 20cm", "Cable length: 3M", "Materials: Steel and glass"],
                variants: [{
                        variantId: 1,
                        variantColor: "pink",
                        variantImage: "./images/roseG.jpg",
                        variantQuanitity: 2
                    },
                    {
                        variantId: 2,
                        variantColor: "Gold",
                        variantImage: "./images/goldG.jpg",
                        variantQuanitity: 4
                    }
                ],

            }
        ]
    },




    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeItem(id) {
            for (var i = this.cart.length - 1; i >= 0; i--) {
                if (this.cart[i] === id) {
                    this.cart.splice(i, 1);
                    return
                }
            }
        }
    }
})