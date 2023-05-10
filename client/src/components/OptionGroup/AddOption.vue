<template>
    <div class="modal" tabindex="-1" ref="modal">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">新增群組</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row p-3 gy-3">
                        <div class="col-6">
                            <label for="exampleFormControlInput1" class="form-label">商品型別</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1"
                                v-model="tempProduct.Option_Group" placeholder="輸入商品型別">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                    <button type="button" @click="$emit('update-option', tempProduct)" class="btn btn-primary">確認</button>
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
    emits: ['update-option'],
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
        const showModal = function () {
            model.value.show()
        }

        const hideModal = function () {
            model.value.hide()
        }

        onMounted(() => {
            console.log(props)
            model.value = new Modal(modal.value)
        })
        return {
            props,
            tempProduct,
            modal,
            model,
            showModal,
            hideModal,
        }
    }
}
</script>