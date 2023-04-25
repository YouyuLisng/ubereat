<template>
    <div class="container">
        <div class="d-flex justify-content-between align-items-center p-3">
            <div>
                <h4>客製化群組</h4>
            </div>
            <div>
                <button type="button" class="btn btn-dark rounded-0" @click="open_addModal(true)">新增群組</button>
            </div>
        </div>
    </div>
    <add_Model ref="addModal"></add_Model>
</template>

<script>
import { ref, onMounted } from 'vue'
import { defineComponent } from 'vue'
import del_Model from '@/components/Product/DelModel.vue'
import add_Model from '@/components/OptionGroup/AddOption.vue'
import axios from 'axios'

export default defineComponent({
    components: {
        add_Model,
        del_Model
    },
    setup() {
        const delModal = ref(null)
        const addModal = ref(null)
        let ShopID = sessionStorage.getItem('Shop_ID')
        var tempProduct = ref({})
        let isNew = ref(true)
        const open_addModal = function(New, item) {
            console.log(item)
            if (New) {
                tempProduct.value = item
            } else {
                tempProduct.value = { ...item }
            }
            isNew.value = New
            addModal.value.showModal()
        }
        const updateOption = function (item) {
            tempProduct.value = item
            if (isNew.value === true) {
                axios.post('http://localhost:3000/add-option-group', {
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
        return {
            addModal,
            delModal,
            tempProduct,
            isNew,
            open_addModal
        }
    }
})
</script>