Vue.component('shopping-cart', {
    name: 'shopping-cart',
    props: {
        cart: Array,
        products: Array,
    },
    computed: {
        productsInCart() {
            return this.products
                .map(product => {
                    return {
                        ...product,
                        variants: product.variants.map(variant => {
                            return {
                                ...variant,
                                count: this.cart.filter(variantIdString => variantIdString === `${product.productId}-${variant.variantId}`).length
                            }
                        }).filter(variant => variant.count > 0)
                    }
                })
                .filter(product => product.variants.length > 0)
        }
    },
    template: `<div class="cart-content">
        <ul>
            <li v-for="product in productsInCart">
                {{product.product}}
                <ul>
                    <li v-for="variant in product.variants">
                        {{variant.variantColor}} - {{variant.count}}
                    </li>
                </ul>
            </li> 
        </ul>
    </div>`
})