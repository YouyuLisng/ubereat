<template>
    <div class="container">
        <div class="d-flex justify-content-between align-items-center p-3">
            <div>
                <h4>客製化群組</h4>
            </div>
            <div>
                <button type="button" class="btn btn-dark rounded-0 me-3" @click="open_addModal(true, {})">新增群組</button>
                <button type="button" class="btn btn-dark rounded-0">
                    <router-link class="nav-link" to="/dashboard/product/add-option">
                        新增群組選項
                    </router-link>
                </button>
            </div>
        </div>
        <div class="dropdown mb-3" v-for="(item, index) in OptionGroup" :key="index">
            <div class="product-wrap" @click="toggleCollapse(index)" :class="{ active: item.active }">
                <div class="product-wrap-title">
                    <h3>{{ item.Option_Group }}</h3>
                    <div class="product-wrap-button">
                        <img class="" src="../../../image/plus.png" alt="">
                    </div>
                </div>
            </div>
            <div v-for="product in item.Options" class="collapse pt-2" :id="'collapseExample' + index"
                :class="{ show: item.active }">
                <div class="card card-body">
                    <div class="row align-items-center">
                        <div class="col">
                            {{ product.OptionName }}
                        </div>
                        <div class="col">
                            {{ product.OptionPrice }}$
                        </div>
                        <div class="col">
                            <div class="btn-group">
                                <button class="btn btn-outline-dark btn-sm">編輯</button>
                                <button class="btn btn-outline-danger btn-sm">刪除</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <add_Model ref="addModal" :product="tempProduct" @update-option="updateOption"></add_Model>
</template>
<style>
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
        let OptionGroup = ref([])
        const getOptionGroup = function () {
            const api = `http://localhost:3000/get-option-group?ShopID=${ShopID}`
            axios.get(api).then((res) => {
                console.log(res.data)
                OptionGroup.value = res.data.data
            })
        }

        const open_addModal = function (New, item) {
            console.log(New, item)
            if (New) {
                tempProduct.value = item
            } else {
                tempProduct.value = { ...item }
            }
            isNew.value = New
            addModal.value.showModal()
        }
        const updateOption = function (item) {
            console.log(item)
            tempProduct.value = item
            if (isNew.value === true) {
                axios.post('http://localhost:3000/add-option-group', {
                    data: tempProduct.value,
                    ShopID: sessionStorage.getItem('Shop_ID')
                }).then((res) => {
                    console.log('新增')
                    console.log(res.data)
                })
            } else {
                axios.put('http://localhost:3000/upadte-product', {
                    data: tempProduct.value,
                }).then((res) => {
                    console.log('編輯')
                    console.log(res.data)
                })
            }
            getOptionGroup()
            addModal.value.hideModal()
        }
        const toggleCollapse = (index) => {
            OptionGroup.value.forEach((item, i) => {
                if (index === i) {
                    item.active = !item.active;
                } else {
                    item.active = false;
                }
            });
        };
        onMounted(() => {
            getOptionGroup()
        })
        return {
            addModal,
            delModal,
            tempProduct,
            isNew,
            OptionGroup,
            open_addModal,
            updateOption,
            toggleCollapse
        }
    }
})
</script>