<template>
    <div class="container mt-3 border rounded-3">
        <div class="row bg-gray rounded-3 p-3">
            <div class="col-lg-6 col d-none d-lg-block">
                <h1 class="fs-5 p-3 text-center">新增商品類型</h1>
                <div class="row justify-content-center">
                    <div class="col-6 d-flex justify-content-center align-items-center">
                        <input v-model="type" type="text" class="form-control" id="exampleFormControlInput1"
                            placeholder="新增商品類型">
                    </div>
                    <div class="col-2">
                        <button @click="add_Product_Type" type="button" class="btn btn-primary">新增</button>
                    </div>
                </div>
                <table class="table mt-4">
                    <thead>
                        <tr>
                            <th>商品類別</th>
                            <th class="text-center">編輯</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in Product_Type" :key="item.ID">
                            <td><input :disabled="index !== editIndex" type="text" class="form-control"
                                    id="exampleInputEmail1" v-model="item.Type" @keyup.enter="save(item)"
                                    aria-describedby="emailHelp"></td>
                            <td class="text-center">
                                <div class="btn-group">
                                    <button @click="edit(item, index)" class="btn btn-outline-primary btn-sm">編輯</button>
                                    <button @click="del_Type(item)" class="btn btn-outline-danger btn-sm"
                                        v-if="index !== editIndex">刪除</button>
                                    <button @click="save(item)" class="btn btn-outline-danger btn-sm" v-else>儲存</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-lg-6 col-12 bg-white rounded-3 p-3">
                <div class="row gy-3">
                    <div class="col-6">
                        <label for="exampleFormControlInput1" class="form-label">商品名稱</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                            v-model="tempProduct.Product_Name" placeholder="輸入商品名稱">
                    </div>
                    <div class="col-6">
                        <label class="form-label">商品類型</label>
                        <select class="form-select" aria-label="Default select example" v-model="tempProduct.Product_Type">
                            <option selected>請選擇</option>
                            <option v-for="item in Product_Type" :key="item.ID" :value="item.Type">{{ item.Type }}</option>
                        </select>
                    </div>
                    <div class="w-100"></div>
                    <div class="col-6">
                        <label for="exampleFormControlInput2" class="form-label">商品價格</label>
                        <input type="text" class="form-control" id="exampleFormControlInput2"
                            v-model="tempProduct.Product_Price" placeholder="商品價格">
                    </div>
                    <div class="col-6 d-flex align-items-center">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="tempProduct.is_enabled" :true-value="1"
                                :false-value="0" id="is_enabled" />
                            <label class="form-check-label" for="is_enabled">
                                是否啟用
                            </label>
                        </div>
                    </div>
                    <div class="w-100"></div>
                    <div class="col-12">
                        <label for="exampleFormControlInput3" class="form-label">商品描述</label>
                        <input type="text" class="form-control" id="exampleFormControlInput3"
                            v-model="tempProduct.Product_Description" placeholder="商品敘述">
                    </div>
                    <div class="col-12">
                        <div class="mb-3">
                            <label for="formFile" class="form-label">上傳圖片檔案</label>
                            <input ref="fileinput " @change="uploadfile" class="form-control" name="image" type="file">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mb-3">
                            <label for="formFile" class="form-label">輸入圖片網址</label>
                            <input @change="uploadfile" v-model="tempProduct.Product_IMGURL" class="form-control">
                        </div>
                    </div>
                    <div class="col-12">
                        <label class="form-label">商品圖片 預覽</label>
                        <div class="border rounded-3 p-3 d-flex justify-content-center align-items-center img-wrap">
                            <img :src="tempProduct.Product_IMGURL" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
import del_Model from '@/components/DelModel.vue'
import axios from 'axios'

export default defineComponent({
    setup() {
        const delModal = ref(null)
        let ShopID = sessionStorage.getItem('Shop_ID')
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
        if (!token) {
            router.push('/shop_login') // 未登入，導回登入頁面
        }
        const type = ref(null)
        const tempProduct = ref({
            Product_Name: '',
            Product_Type: '請選擇',
            Product_Price: '',
            is_enabled: '',
            Product_Description: '',
            Product_IMGURL: ''
        })
        const add_Product_Type = function () {
            axios.post('http://localhost:3000/add_product-type', {
                data: {
                    Type: type.value,
                    ShopID: ShopID
                }
            }).then((res) => {
                console.log(res.data)
                type.value = ''
                get_Product_Type()
            })
        }
        const editIndex = ref(-1)
        const Product_Type = ref([])
        const get_Product_Type = function () {
            axios.get(`http://localhost:3000/api/product-type?ShopID=${ShopID}`)
                .then((res) => {
                    console.log(res)
                    Product_Type.value = res.data.data
                })
        }
        const edit = function (item, index) {
            console.log(item)
            editIndex.value = index
        }
        const save = function (item) {
            console.log(item)
            const editItem = item
            axios.put(`http://localhost:3000/update_product-type`, {
                data: {
                    ID: item.ID,
                    Type: editItem.Type
                }
            }).then((res) => {
                console.log(res)
                editIndex.value = -1
                get_Product_Type()
            })
        }
        const del_Type = function (item) {
            var ID = item.ID
            axios.delete(`http://localhost:3000/del_product-type?ID=${ID}`)
                .then((res) => {
                    console.log(res)
                    get_Product_Type()
                })
        }
        let uploadIMG = null
        // 抓取上傳檔案的值
        const uploadfile = function (e) {
            const file = e.target.files[0]
            uploadIMG = e.target.files[0]
            const reader = new FileReader()
            reader.addEventListener('load', imageLoaded)
            reader.readAsDataURL(file)
            onFileChange()
        }
        const imageLoaded = function (e) {
            tempProduct.Product_IMGURL = e.target.result
        }
        const onFileChange = async function () {
            const formData = new FormData();
            formData.append('image', uploadIMG);
            try {
                const response = await axios.post('http://localhost:3000/api/upload-image', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                tempProduct.value.Product_IMGURL = response.data.IMG_Path
            } catch (error) {
                console.error(error);
            }
        };
        onMounted(() => {
            get_Product_Type()
        })
        return {
            delModal,
            type,
            Product_Type,
            tempProduct,
            add_Product_Type,
            uploadfile,
            imageLoaded,
            onFileChange,
            uploadIMG,
            editIndex,
            edit,
            save,
            del_Type
        }
    }
})
</script>