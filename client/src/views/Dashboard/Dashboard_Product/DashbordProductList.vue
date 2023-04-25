<template>
    <div>
        <div class="container">
            <div class="text-end p-3">
                <button @click="open_addModel(true, {})" type="button" class="btn btn-dark rounded-0">新增商品</button>
            </div>
            <div class="dropdown mb-3" v-for="(item, index) in Product" :key="index">
                <div class="product-wrap" @click="toggleCollapse(index)" :class="{ active: item.active }">
                    <div class="product-wrap-title">
                        <h3>{{ item.Product_Type }}</h3>
                        <div class="product-wrap-button">
                            <img class="" src="../../../image/plus.png" alt="">
                        </div>
                    </div>
                </div>
                <div v-for="product in item.Products" class="collapse pt-2" :id="'collapseExample' + index"
                    :class="{ show: item.active }">
                    <div class="card card-body">
                        <div class="row align-items-center">
                            <div class="col">
                                {{ product.Product_Name }}
                            </div>
                            <div class="col-1">
                                {{ product.Product_Price }}$
                            </div>
                            <div class="col-5">
                                {{ product.Product_Description }}
                            </div>
                            <div class="col">
                                <div class="btn-group">
                                    <button class="btn btn-outline-dark btn-sm" @click="open_addModel(false, product)">編輯</button>
                                    <button class="btn btn-outline-danger  btn-sm" @click="opendelModal(product)">刪除</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <addModal ref="addModal" :product="tempProduct" @update-product="updateProduct"></addModal>
    <delModel ref="delModal" :product="tempProduct" @del-Product="delProduct"></delModel>
</template>
<style>
.card-body h5 {
    font-size: 16px;
}

.bg-gray {
    background-color: #E5E6E4;
}

.card img {
    max-width: 50%;
    height: auto;
    object-fit: cover;
}

.product-wrap {
    position: relative;
    cursor: pointer;
}

.product-wrap-title {
    background-color: #ebe9df;
    border-radius: 0 20px 20px 20px;
    -webkit-transition: .3s;
    transition: .3s;
    padding: 15px;
    -webkit-box-shadow: 3px 4px 0 0 rgba(39, 39, 36, .3);
    box-shadow: 3px 4px 0 0 rgba(39, 39, 36, .3);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
}
.product-wrap-title:hover {
    box-shadow: 0px 0px 0 0 rgba(39, 39, 36, .3);
}
.product-wrap-title h3 {
    font-size: 1.4rem;
    line-height: 26px;
    letter-spacing: .05em;
    font-weight: 500;
}

.product-wrap-button img {
    width: 30px;
    height: 30px;
}

.dropdown {
    max-width: 800px;
    margin: 0 auto;
}

</style>
<script>
import { ref, onMounted } from 'vue'
import { defineComponent } from 'vue'
import addModal from '@/components/Product/AddProduct.vue'
import delModel from '@/components/Product/DelModel.vue'
import axios from 'axios'

export default defineComponent({
    components: {
        addModal,
        delModel
    },
    setup() {
        let ShopID = sessionStorage.getItem('Shop_ID')
        let Product = ref([])
        let addModal = ref(null)
        let delModal = ref(null)
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
        if (!token) {
            router.push('/shop_login') // 未登入，導回登入頁面
        }
        const getProduct = function () {
            axios.get(`http://localhost:3000/get-all-product?ShopID=${ShopID}`).then((res) => {
                console.log(res)
                Product.value = res.data.data
            })
        }
        const toggleCollapse = (index) => {
            Product.value.forEach((item, i) => {
                if (index === i) {
                    item.active = !item.active;
                } else {
                    item.active = false;
                }
            });
        };
        onMounted(() => {
            getProduct()
        })
        var tempProduct = ref({})
        const open_addModel = function (New, item) {
            console.log(item)
            if (New) {
                tempProduct.value = item
            } else {
                tempProduct.value = { ...item }
            }
            isNew.value = New
            this.$refs.addModal.showModal()
        }
        const opendelModal = function (item) {
            tempProduct.value = { ...item }
            this.$refs.delModal.showModal()
        }
        //判斷是否為新增或編輯 updateProduct = 新增or編輯
        let isNew = ref(true)
        const updateProduct = function (item) {
            tempProduct.value = item
            if (isNew.value === true) {
                axios.post('http://localhost:3000/add-product', {
                    data: tempProduct.value,
                    ShopID: sessionStorage.getItem('Shop_ID')
                }).then((res) => {
                    console.log(res)
                    getProduct()
                })
            } else {
                axios.put('http://localhost:3000/upadte-product', {
                    data: tempProduct.value,
                }).then((res) => {
                    console.log(res)
                    getProduct()
                })
            }
            addModal.value.hideModal()
        }
        const delProduct = function (item) {
            var ProductID = item.ProductID
            axios.delete(`http://localhost:3000/del-product?ProductID=${ProductID}`)
                .then((res) => {
                    console.log(res)
                    delModal.value.hideModal()
                    getProduct()
                })
        }
        return {
            Product,
            tempProduct,
            addModal,
            delModal,
            open_addModel,
            opendelModal,
            isNew,
            updateProduct,
            delProduct,
            toggleCollapse,

        }
    }
})
</script>
