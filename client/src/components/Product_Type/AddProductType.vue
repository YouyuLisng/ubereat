<template>
    <div class="modal" tabindex="-1" ref="modal">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">商品型態新增or編輯</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row p-3 gy-3">
                        <div class="col-6">
                            <label for="exampleFormControlInput1" class="form-label">商品型別</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1"
                                v-model="tempProduct.Product_Type" placeholder="輸入商品型別">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                    <button type="button" @click="$emit('updateType', tempProduct)" class="btn btn-primary">確認</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import { onMounted, ref, props, watch } from 'vue';
import axios from 'axios';
export default {
    emits: ['updateType'],
    props: {
        product: {
            type: Object,
            default: () => ({})
        }
    },
    setup(props) {
        const tempProduct = ref(props.product)
        const modal = ref(null)
        const model = ref(null)

        watch(() => props.product, (newVal) => {
            tempProduct.value = newVal
        })
        let ShopID = sessionStorage.getItem('Shop_ID')
        const Product_Type = ref([])
        const get_Product_Type = function () {
            axios.get(`http://localhost:3000/api/product-type?ShopID=${ShopID}`)
                .then((res) => {
                    console.log(res.data)
                    Product_Type.value = res.data.data
                })
        }
        const showModal = function () {
            model.value.show()
        }

        const hideModal = function () {
            model.value.hide()
        }

        onMounted(() => {
            get_Product_Type()
            model.value = new Modal(modal.value)
        })
        
        return {
            props,
            tempProduct,
            modal,
            model,
            Product_Type,
            showModal,
            hideModal,
            get_Product_Type
        }
    }
}
</script>