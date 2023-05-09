<template>
    <Navbar></Navbar>
    <div class="container-fluid mt-3">
        <h3 class="p-3">{{ shopData.Shop_Name }}</h3>
        <div class="row">
            <div class="col-lg-3 d-none d-lg-block">
                <ul class="side_menu ps-3">
                    <li v-for="item in Product_Type" :key="item.ID" @click="get_click_product(item)">
                        <p>{{ item.Product_Type }}</p>
                    </li>
                </ul>
            </div>
            <div class="col-lg-9 col-12">
                <div class="row gy-2 gx-2">
                    <div class="col-lg-3 col-md-6 position-relative" v-for="item in tempData" :key="item.ProductID">
                        <div class="shop-img position-relative" @click="toProductInfo(item.ProductID)">
                            <img class="img-fluid" :src="item.Product_IMGURL" alt="Responsive image">
                        </div>
                        <div class="btn border-0 position-absolute top-0 end-0 love">
                        </div>
                        <div class="mt-3">
                            <div class="row">
                                <div class="col-12">
                                    <p>{{ item.Product_Name }}<br>
                                        {{ item.Product_Price }} $
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="position-absolute top-0 end-0 p-2">
                            <div style="cursor: pointer;" @click="addCart(item)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
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

.side_menu li p {
    font-size: 18px;
    text-decoration: none;
    color: #000;
    font-weight: 400;
    cursor: pointer;
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
import Footer from './components/Footer.vue'
export default defineComponent({
    components: {
        Navbar,
        Footer
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const ShopID = ref(null);
        // productData 儲存全部產品資料
        const productData = ref([])
        // tempData 真正顯示在畫面上的
        const tempData = ref([])
        const shopData = ref({})
        // 取得商家資訊
        const get_shop = function (ShopID) {
            axios.get(`http://localhost:3000/api/shop?ShopID=${ShopID}`)
                .then((res) => {
                    console.log(res)
                    shopData.value = res.data.data
                })
        }
        // 取得產品資訊
        const get_product = function (ShopID) {
            axios.get(`http://localhost:3000/get-product?ShopID=${ShopID}`)
                .then((res) => {
                    console.log(res.data)
                    productData.value = res.data.data
                    tempData.value = res.data.data
                })
        }
        const Product_Type = ref([])
        const get_Product_Type = function (ShopID) {
            axios.get(`http://localhost:3000/api/product-type?ShopID=${ShopID}`)
                .then((res) => {
                    console.log(res.data, 'type')
                    Product_Type.value = res.data.data
                })
        }
        //加入購物車
        const addCart = function (item) {
            console.log(item)
            axios.post(`http://localhost:3000/add-toCart`, {
                data: {
                    UserID: sessionStorage.getItem('UserID'),
                    ShopID: ShopID.value,
                    cartItem: item,
                    qty: 1
                }
            }).then((res) => {
                console.log(res.data)
            })
        }
        const toProductInfo = (ID) => {
            router.push(`/product/${ID}`)
        }
        const get_click_product = function (item) {
            console.log(item)
            var Product_Type = item.Product_Type
            var temp = productData.value.filter(function (item, index) {
                return item.Product_Type === Product_Type;
            })
            console.log(temp)
            tempData.value = temp
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
            tempData,
            ShopID,
            shopData,
            Product_Type,
            toProductInfo,
            addCart,
            get_click_product
        }
    }
})
</script>
