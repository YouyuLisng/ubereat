<template>
    <div class="bg-gray">
        <div class="container">
            <div class="text-end p-3">
                <button @click="open_addModel(true)" type="button" class="btn btn-primary">新增商品</button>
            </div>
            <div class="row p-3 gx-3">
                <div class="col-3" v-for="item in Product" :key="item.ProductID">
                    <div class="col">
                        <div class="card">
                            <img :src="item.Product_IMGURL" class="card-img-top" alt="...">
                            <div class="card-body" style="height: 112px;">
                                <h5 class="card-title">{{ item.Product_Name }}</h5>
                                <p class="card-text">{{ item.Product_Description }}</p>
                            </div>
                            <div class="row">
                                <div class="col border text-center">
                                    <button type="button" class="btn" @click="open_addModel(false, item)">編輯</button>
                                </div>
                                <div class="col border text-center">
                                    <button type="button" class="btn">查看</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <addModal ref="addModal" :product="tempProduct" @update-product="updateProduct"></addModal>
</template>
<style>
.bg-gray {
    background-color: #E5E6E4;
}

.card img {
    max-width: 100%;
    height: 180px;
    object-fit: cover;
}
</style>
<script>
import { ref, onMounted } from 'vue'
import { defineComponent } from 'vue'
import addModal from '@/components/AddProduct.vue'
import axios from 'axios'

export default defineComponent({
    components: {
        addModal
    },
    setup() {
        let ShopID = 7
        let Product = ref([])
        let addModal = ref(null)
        const getProduct = function () {
            axios.get(`http://localhost:3000/get-product?ShopID=${ShopID}`).then((res) => {
                console.log(res)
                Product.value = res.data.data
            })
        }
        onMounted(() => {
            getProduct()
        })
        var tempProduct = ref({})
        const open_addModel = function (New, item) {
            tempProduct.value = { ...item }
            isNew.value = New
            this.$refs.addModal.showModal()
        }
        //判斷是否為新增或編輯 updateProduct = 新增or編輯
        let isNew = ref(true)
        const updateProduct = function (item) {
            tempProduct.value = item
            console.log(item)
            if (isNew.value === true) {
                axios.post('http://localhost:3000/add-product', {
                    data: tempProduct.value,
                    ShopID: sessionStorage.getItem('Shop_ID')
                }).then((res) => {
                    console.log(res)
                })
                console.log('新增')
            } else {
                addModal.value.hideModal()
                console.log('編輯')
            }
        }
        return {
            Product,
            tempProduct,
            addModal,
            open_addModel,
            isNew,
            updateProduct

        }
    }
})
</script>
