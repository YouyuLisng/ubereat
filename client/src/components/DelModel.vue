<template>
    <div class="modal fade" id="delModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
        ref="modal">
        <div class="modal-dialog" role="document">
            <div class="modal-content border-0">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title">
                        <span>刪除</span>
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    是否刪除 <strong class="text-danger">{{ tempProduct.Product_Name }}</strong> (刪除後將無法恢復)。
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消
                    </button>
                    <button type="button" class="btn btn-danger" @click="$emit('del-product', tempProduct)">確認刪除
                    </button>
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
    emits: ['del-product'],
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
        const showModal = function () {
            model.value.show()
        }

        const hideModal = function () {
            model.value.hide()
        }

        onMounted(() => {
            model.value = new Modal(modal.value)
        })

        return {
            props,
            tempProduct,
            modal,
            model,
            showModal,
            hideModal
        }
    }
}
</script>