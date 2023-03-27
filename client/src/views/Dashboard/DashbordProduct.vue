<template>
    <div>
        <div class="container">
            <div class="text-end p-3">
                <button @click="open_addModel(true, {})" type="button" class="btn btn-primary">新增商品</button>
            </div>
            <table class="table mt-4">
                <thead>
                    <tr>
                        <th>分類</th>
                        <th>產品名稱</th>
                        <th>售價</th>
                        <th>是否啟用</th>
                        <th class="text-center">編輯</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in Product" :key="item.ProductID">
                        <td>{{ item.Product_Type }}</td>
                        <td>{{ item.Product_Name }}</td>
                        <td>
                            {{ item.Product_Price }}
                        </td>
                        <td>
                            <span class="text-success" v-if="item.is_enabled">啟用</span>
                            <span class="text-muted" v-else>未啟用</span>
                        </td>
                        <td class="text-center">
                            <div class="btn-group">
                                <button class="btn btn-outline-primary btn-sm"
                                    @click="open_addModel(false, item)">編輯</button>
                                <button class="btn btn-outline-danger btn-sm" @click="opendelModal(item)">刪除</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- <div class="row p-3 gx-3 gy-3">
                <div class="col-3" v-for="item in Product" :key="item.ProductID">
                    <div class="col">
                        <div class="card">
                            <div class="d-flex justify-content-center align-items-center">
                                <img :src="item.Product_IMGURL" class="card-img-top" alt="...">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title text-center">{{ item.Product_Name }}</h5>
                            </div>
                            <div class="row">
                                <div class="col border text-center">
                                    <button type="button" class="btn" @click="open_addModel(false, item)">編輯</button>
                                </div>
                                <div class="col border text-center">
                                    <button type="button" class="btn">刪除</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
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
</style>
<script>
import { ref, onMounted } from 'vue'
import { defineComponent } from 'vue'
import addModal from '@/components/AddProduct.vue'
import delModel from '@/components/DelModel.vue'
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
        onMounted(() => {
            getProduct()
        })
        var tempProduct = ref({})
        const open_addModel = function (New, item) {
            if (New) {
                tempProduct.value = item
                tempProduct.value.Product_Type = '請選擇'
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
            delProduct

        }
    }
})
</script>
