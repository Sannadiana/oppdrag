Vue.component('product', {
    template: `
    <div class="product">

    <div class="product-image">
        <img v-bind:src="image" alt="">
    </div>

    <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In stock</p>
        <p v-else="!inStock">Out of stock</p>
        <!-Sette et bilde som indikerer salg->
        <span v-if="onsale">30% Discount</span>

        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>


        <!--"{ backgroundImage: { url(image) }"-->
        <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box" :style="{ backgroundColor: variant.variantColor}" v-on:mouseover="updateProduct(index)"></div>
    </div>

    <button v-on:click="addToCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Add to cart</button>
    <button @click="removeFromCart">Remove from cart</button>



</div>
    `,
    data() {
        return {
            brand: "Tom Dixen",
            product: 'Pendent',
            selectedVariant: 0,
            onsale: true,
            details: ["Sockel: 27Ø", "Width: 40cm", "Hight: 40cm", "Cable length: 2M", "Materials: Steel and plastic"],
            variants: [{
                    variantId: 100,
                    variantColor: "Gold",
                    variantImage: "./images/goldL.jpg",
                    variantQuanitity: 10
                }, {
                    variantId: 101,
                    variantColor: "Silver",
                    variantImage: "./images/silverL.jpg",
                    variantQuanitity: 2
                },
                {
                    variantId: 102,
                    variantColor: "Pink",
                    variantImage: "./images/roseL.jpg",
                    variantQuanitity: 4
                },
                {
                    variantId: 103,
                    variantColor: "Grey",
                    variantImage: "./images/smokeL.jpg",
                    variantQuanitity: 0
                }
            ],

        }
    },
    methods: {
        addToCart: function() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },

        updateProduct: function(index) {
            this.selectedVariant = index
            console.log(index)
        },
        removeFromCart: function() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
        },
    },
    computed: {
        title() {
            return this.brand + " " + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuanitity
        }
    }

})



let webShopApp = new Vue({
    el: '#shop-app',
    data: {
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeItem(id) {
            for (var i = this.cart.length - 1; i >= 0; i--) {
                if (this.cart[i] === id) {
                    this.cart.splice(i, 1);
                }
            }
        }
    }
})