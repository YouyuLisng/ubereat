<template>
    <div class="container">
        <div class="mx-auto" style="width: 1000px;">
            <div class="row mt-5">
                <div class="col">
                    <div>
                        <img class="img-fluid" :src="Product.Product_IMGURL" alt="">
                    </div>
                </div>
                <div class="col">
                    <div class="row gy-3">
                        <div class="col-12">
                            <h3>{{ Product.Product_Name }}</h3>
                        </div>
                        <div class="col-12">
                            <h3>${{ Product.Product_Price }}</h3>
                        </div>
                        <div class="col-12">
                            {{ Product.Product_Description}}
                        </div>
                        <div class="col-12 bg-secondary py-3">
                            套餐升級
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
export default {
    setup() {
        const route = useRoute();
        const productId = route.params.id
        const Product = ref({})
        const get_Product = function () {
            axios.get(`http://localhost:3000/product?ProductID=${productId}`)
                .then((res) => {
                    console.log(res.data.data[0])
                    Product.value = res.data.data[0]
                })
        }
        onMounted(() => {
            get_Product()
        })
        return {
            Product
        }
    }
}
</script>