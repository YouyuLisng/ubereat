<template>
    <Navbar></Navbar>
    <div class="container-fluid mt-3">
        <h3 class="p-3">{{ shopData.Shop_Name }}</h3>
        <div class="row">
            <div class="col-3">
                <ul class="side_menu ps-3">
                    <li v-for="item in Product_Type" :key="item.ID">
                        <a href="">{{ item.Type }}</a>
                    </li>
                </ul>
            </div>
            <div class="col-9">
                <div class="row gy-2 gx-2">
                    <div class="col-lg-3 col-md-12 position-relative" v-for="item in productData" :key="item.ProductID">
                        <div class="shop-img position-relative" @click="toProductInfo(item.ProductID)">
                            <img class="img-fluid" :src="item.Product_IMGURL" alt="Responsive image">
                        </div>
                        <div class="btn border-0 position-absolute top-0 end-0 love">
                        </div>
                        <div class="mt-3">
                            <div class="row">
                                <div class="col">
                                    <p>{{ item.Product_Name }}<br>
                                        {{ item.Product_Price }} $
                                    </p>
                                </div>
                                <div class="col">
                                    <button @click="addCart(item)" type="button" class="btn btn-secondary">加入購物車</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
a {
    text-decoration: none;
    color: #000;
}

.banner {
    overflow: hidden;
    height: 200px;
}

.banner img {
    width: 100%;
    height: auto;
    top: -170%
}

.side_menu li a {
    font-size: 18px;
    text-decoration: none;
    color: #000;
    font-weight: 400;
}

.side_menu li {
    padding-bottom: 10px;
}

.shop-img {
    overflow: hidden;
    height: 180px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
}

.shop-img img {
    position: absolute;
}
</style>
<script>
import { ref, onMounted } from 'vue'
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import Navbar from './components/Navbar.vue';

export default defineComponent({
    components: {
        Navbar
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const ShopID = ref(null);
        const productData = ref([])
        const shopData = ref({})
        const get_shop = function (ShopID) {
            axios.get(`http://localhost:3000/api/shop?ShopID=${ShopID}`)
                .then((res) => {
                    console.log(res)
                    shopData.value = res.data.data
                })
        }
        const get_product = function (ShopID) {
            axios.get(`http://localhost:3000/get-product?ShopID=${ShopID}`)
                .then((res) => {
                    console.log(res)
                    productData.value = res.data.data
                })
        }
        const Product_Type = ref([])
        const get_Product_Type = function (ShopID) {
            axios.get(`http://localhost:3000/api/product-type?ShopID=${ShopID}`)
                .then((res) => {
                    console.log(res, 'type')
                    Product_Type.value = res.data.data
                })
        }
        //加入購物車
        const addCart = function (item) {
            console.log(item)
            axios.post(`http://localhost:3000/add-toCart`,{
                data: {
                    UserID: sessionStorage.getItem('UserID'),
                    ShopID: ShopID.value,
                    cartItem: item,
                    qty: 1
                }
            }).then((res) => {
                console.log(res)
            })
        }
        const toProductInfo = (ID) => {
            router.push(`/product/${ID}`)
        }
        onMounted(() => {
            ShopID.value = route.params.id;
            if (ShopID.value !== null) {
                get_product(ShopID.value)
                get_shop(ShopID.value)
                get_Product_Type(ShopID.value)
            }
        })
        return {
            productData,
            ShopID,
            shopData,
            Product_Type,
            toProductInfo,
            addCart
        }
    }
})
</script>
