<template>
    <div class="container p-3">
        <div class="row gy-3">
            <div class="col-6">
                <select class="form-select" aria-label="Default select example" v-model="data.OptionGroupID">
                    <option disabled selected value="">請選擇</option>
                    <option v-for="item in OptionGroup" :key="item.Option_Group_ID" :value="item.Option_Group_ID">{{
                        item.Option_Group }}</option>
                </select>
            </div>
            <div class="w100"></div>
            <div class="col-6">
                <div>
                    <label for="exampleFormControlInput1" class="form-label">新增選項</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="請輸入選項名稱"
                        v-model="data.OptionName">
                </div>
            </div>
            <div class="w100"></div>
            <div class="col-6">
                <div>
                    <label for="exampleFormControlInput1" class="form-label">選項價錢</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="請輸入選項價錢"
                        v-model="data.OptionPrice">
                </div>
            </div>
            <div class="w100"></div>
            <div class="col-6 text-end">
                <button type="button" class="btn btn-secondary" @click="addoption">送出</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
export default {
    setup() {
        let ShopID = sessionStorage.getItem('Shop_ID')
        const data = ref({
            OptionName: null,
            OptionPrice: null,
            OptionGroupID: ""
        })
        const OptionGroup = ref([])
        const getOptionGriop = function () {
            const api = `http://localhost:3000/get-option-group?ShopID=${ShopID}`
            axios.get(api).then((res) => {
                console.log(res.data)
                OptionGroup.value = res.data.data
            })
        }
        const addoption = function () {
            console.log(data.value)
            const api = `http://localhost:3000/add-option`
            axios.post(api, {
                data: data.value,
            }).then((res) => {
                console.log(res.data)
                data.value = {
                    OptionName: null,
                    OptionPrice: null,
                    OptionGroupID: ""
                }
            })
        }
        onMounted(() => {
            getOptionGriop()
        })
        return {
            data,
            OptionGroup,
            getOptionGriop,
            addoption
        }
    }
}
</script>
