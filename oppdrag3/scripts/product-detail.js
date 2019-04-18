Vue.component('product-detail', {
    template: `
    <div class="product">
    <div class="product-image">
        <img v-bind:src="image" alt="">
    </div>
    <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">{{ variantStock }} in stock</p>
        <p v-else="!inStock">Out of stock</p>
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <!--"{ backgroundImage: { url(image) }"-->
        <div class="variant-container">
            <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box" :style="{ backgroundImage: 'url(' + variant.variantImage + ')'}" v-on:click="updateProduct(index)"></div>
        </div>
    </div>
    <button v-on:click="addToCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Add to cart</button>
    <button @click="removeFromCart">Remove from cart</button>
</div>
    `,
    data() {
        return {
            selectedVariant: 0
        }
    },
    props: {
        productId: {
            type: Number,
        },
        brand: {
            type: String
        },
        product: {
            type: String
        },
        onsale: {
            type: Boolean
        },
        details: {
            type: Array
        },
        variants: {
            type: Array
        },
        cart: {
            type: Array
        }
    },
    computed: {
        title() {
            return `${this.brand} ${this.product}`
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        variantStock() {
            return this.variants[this.selectedVariant].variantQuanitity - this.cart.filter(function(cartId) { return cartId === this.combinedId }).length
        },
        inStock() {
            return this.variantStock > 0
        },
        combinedId() {
            return `${this.productId}-${this.variants[this.selectedVariant].variantId}`
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.combinedId)
        },
        updateProduct(index) {
            this.selectedVariant = index
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.combinedId)
        }
    }
})