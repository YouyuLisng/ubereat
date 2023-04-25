<template>
    <div class="container">
        <div class="d-flex justify-content-between align-items-center p-3">
            <div>
                <h4>類別</h4>
            </div>
            <div>
                <button type="button" class="btn btn-dark rounded-0" @click="open_addModel(true)">新增類別</button>
            </div>
        </div>
        <div class="row p-3 border-bottom">
            <div class="col fw-bolder">名稱</div>
            <div class="col fw-bolder">產品數量</div>
            <div class="col fw-bolder">編輯</div>
        </div>
        <div class="row p-3 border-bottom" v-for="(item, index) in Product_Type">
            <div class="col fw-bolder text-success">{{ item.Product_Type }}</div>
            <div class="col fw-bolder">{{ item.Product_Count }}</div>
            <div class="col">
                <div class="btn-group">
                    <button class="btn btn-outline-primary btn-sm" @click="open_addModel(false, item)">編輯</button>
                    <button class="btn btn-outline-danger btn-sm" @click="opendelModal(item)">刪除</button>
                </div>
            </div>
        </div>
    </div>
    <add_Model ref="addModal" :product="tempProduct" @update-type="updateType"></add_Model>
    <del_Model ref="delModal" :product="tempProduct" @del-Product="delProduct"></del_Model>
</template>

<style>
.bg-gray {
    background-color: #E5E6E4;
}

.img-wrap {
    max-width: 100%;
    height: 300px;
    cursor: pointer;
}

.img-wrap img {
    max-width: 100%;
    height: 100%;
}

.img-wrap p {
    color: #2D93AD;
}
</style>

<script>
import { ref, onMounted } from 'vue'
import { defineComponent } from 'vue'
import del_Model from '@/components/Product/DelModel.vue'
import add_Model from '@/components/Product_Type/AddProductType.vue'
import axios from 'axios'

export default defineComponent({
    components: {
        add_Model,
        del_Model
    },
    setup() {
        const delModal = ref(null)
        let addModal = ref(null)
        let ShopID = sessionStorage.getItem('Shop_ID')
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
        if (!token) {
            router.push('/shop_login') // 未登入，導回登入頁面
        }
        const Product_Type = ref([])
        const get_Product_Type = function () {
            axios.get(`http://localhost:3000/api/product-type?ShopID=${ShopID}`)
                .then((res) => {
                    console.log(res.data.data)
                    Product_Type.value = res.data.data
                })
        }
        const updateType = function (item) {
            tempProduct.value = item
            if (isNew.value === true) {
                axios.post('http://localhost:3000/add_product-type', {
                    data: tempProduct.value,
                    ShopID: sessionStorage.getItem('Shop_ID')
                }).then((res) => {
                    console.log(res.data)
                    get_Product_Type()
                })
            } else {
                axios.put('http://localhost:3000/update_product-type', {
                    data: tempProduct.value,
                }).then((res) => {
                    console.log(res.data)
                    get_Product_Type()
                })
            }
            addModal.value.hideModal()
        }
        const delProduct = function (item) {
            var ID = item.ID
            axios.delete(`http://localhost:3000/del_product-type?ID=${ID}`)
                .then((res) => {
                    console.log(res)
                    delModal.value.hideModal()
                    get_Product_Type()
                })
        }
        const tempProduct = ref({})
        const open_addModel = function (New, item) {
            console.log(item)
            if (New) {
                console.log('新增')
                tempProduct.value = item
            } else {
                console.log('編輯')
                tempProduct.value = { ...item }
            }
            isNew.value = New
            this.$refs.addModal.showModal()
        }
        const opendelModal = function (item) {
            tempProduct.value = { ...item }
            delModal.value.showModal()
        }
        let isNew = ref(true)
        onMounted(() => {
            get_Product_Type()
        })
        return {
            addModal,
            delModal,
            Product_Type,
            tempProduct,
            isNew,
            updateType,
            open_addModel,
            opendelModal,
            delProduct
        }
    }
})
</script>