<template>
    <div class="container-fluid">
        <Navbar class="d-none d-xl-block"></Navbar>
    </div>
    <div class="container-fluid">
        <div class="mx-auto" style="max-width: 1000px;">
            <div class="row mt-xl-5">
                <div class="col-12 p-0 col-xl-6">
                    <div>
                        <img class="product-img" :src="Product.Product_IMGURL" alt="">
                    </div>
                </div>
                <div class="col-12 col-xl-6">
                    <div class="row gy-2 product_scroll">
                        <div class="col-12">
                            <h3>{{ Product.Product_Name }}</h3>
                        </div>
                        <div class="col-12">
                            <h3>${{ Product.Product_Price }}</h3>
                        </div>
                        <div class="col-12">
                            {{ Product.Product_Description }}
                        </div>
                        <div class="col-12" v-for="(ProductOptions, i) in ProductOptions" :key="'product-options-' + i">
                            <div class="bg-secondary p-2">
                                <p>{{ ProductOptions.Option_Group }}</p>
                            </div>
                            <div>
                                <div class="form-check" v-for="(ProductRadio, j) in ProductOptions.Options"
                                    :key="'product-radio-' + j">
                                    <label class="form-check-label" :for="'flexRadioDefault' + i + j">
                                        {{ ProductRadio.OptionName }}
                                    </label>
                                    <input class="form-check-input" type="radio" :name="'flexRadioDefault' + i"
                                        :id="'flexRadioDefault' + i + j">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>
<style>
@media(min-width: 1000px) {
    .product_scroll {
        height: 550px;
        overflow-y: auto;
    }
}
.product-img {
    width: 100%;
    height: auto;
}
@media(max-width:1000px) {
    .product-img {
        width: 100%;
        height: 50vh;
        object-fit: cover;
    }
}
</style>
<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue'
export default {
    components: {
        Navbar,
        Footer
    },
    setup() {
        const route = useRoute();
        const productId = route.params.id
        const Product = ref({})
        const ProductOptions = ref([])
        const get_Product = function () {
            axios.get(`http://localhost:3000/product?ProductID=${productId}`)
                .then((res) => {
                    console.log(res.data.data)
                    Product.value = res.data.data[0]
                    ProductOptions.value = res.data.data[0].Options
                })
        }
        onMounted(() => {
            get_Product()
        })
        return {
            Product,
            ProductOptions
        }
    }
}
</script>