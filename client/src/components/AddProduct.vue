<template>
    <div class="modal" tabindex="-1" ref="modal">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">新增產品</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row p-3 gy-3">
                        <div class="col-6">
                            <label for="exampleFormControlInput1" class="form-label">商品名稱</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1"
                                v-model="tempProduct.Product_Name" placeholder="輸入商店名稱">
                        </div>
                        <div class="w-100"></div>
                        <div class="col-12">
                            <label for="exampleFormControlInput2" class="form-label">商品價格</label>
                            <input type="text" class="form-control" id="exampleFormControlInput2"
                                v-model="tempProduct.Product_Price" placeholder="商品價格">
                        </div>
                        <div class="col-12">
                            <label for="exampleFormControlInput2" class="form-label">商品描述</label>
                            <input type="text" class="form-control" id="exampleFormControlInput2"
                                v-model="tempProduct.Product_Description" placeholder="商店敘述">
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
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                    <button type="button" @click="$emit('update-product', tempProduct)" class="btn btn-primary">確認</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import { onMounted, ref, props, watchEffect } from "vue";
import axios from 'axios';
export default {
    props: {
        product: {
            type: Object,
            default: () => ({})
        }
    },
    setup(props) {
        const tempProduct = ref({})
        const modal = ref(null)

        watchEffect(() => {
            tempProduct.value = props.product
        });

        const showModal = function () {
            modal.value.show()
        }

        const hideModal = function() {
            modal.value.hide()
        }

        onMounted(() => {
            modal.value = new Modal(modal.value)
        })
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
        return {
            props,
            tempProduct,
            modal,
            uploadIMG,
            uploadfile,
            imageLoaded,
            onFileChange,
            showModal,
            hideModal
        }
    }
}
</script>