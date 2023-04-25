<template>
    <div class="container mt-3 rounded-3">
        <div class="d-none d-lg-block text-center">
            <h1 class="fs-5 p-3">設定前台資訊</h1>
        </div>
        <div class="row rounded-3">
            <div class="col-lg-12 col-12">
                <div class="bg-white rounded-3">
                    <div class="row m-3 p-3 gy-3">
                        <h1 class="fs-5 p-3 d-lg-none d-block text-center">設定前台資訊</h1>
                        <div class="col-lg-6 col-12">
                            <label for="exampleFormControlInput1" class="form-label">商店名稱</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1"
                                v-model="ShopInfo.Shop_Name" placeholder="輸入商店名稱">
                        </div>
                        <div class="col-lg-6 col-12">
                            <label for="exampleFormControlInput1" class="form-label">外送費</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1"
                                v-model="ShopInfo.Shop_delivery" placeholder="外送費">
                        </div>
                        <div class="w-100"></div>
                        <div class="col-12">
                            <label for="exampleFormControlInput2" class="form-label">商店描述</label>
                            <input type="" class="form-control" id="exampleFormControlInput2" placeholder="商店敘述"
                                v-model="ShopInfo.Shop_Description">
                        </div>
                        <div class="col-12">
                            <label for="exampleFormControlInput2" class="form-label">商店地址</label>
                            <input type="" class="form-control" id="exampleFormControlInput2" placeholder="商店地址"
                                v-model="ShopInfo.Shop_Address">
                        </div>
                        <div class="col-12">
                            <label class="form-label">業務類型</label>
                            <select class="form-select" aria-label="Default select example" v-model="ShopInfo.Shop_Type">
                                <option selected>請選擇</option>
                                <option value="餐廳">餐廳</option>
                                <option value="便利商店">便利商店</option>
                                <option value="藥局">藥局</option>
                                <option value="酒類專賣店">酒類專賣店</option>
                            </select>
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
                                <input @change="uploadfile" v-model="ShopInfo.Shop_IMGURL" class="form-control">
                            </div>
                        </div>
                        <div class="col-12">
                            <label class="form-label">封面照片 預覽</label>
                            <div class="border rounded-3 p-3 d-flex justify-content-center align-items-center img-wrap">
                                <img :src="ShopInfo.Shop_IMGURL" alt="">
                            </div>
                        </div>
                        <div class="col-12 text-end">
                            <div @click="updateShop" class="btn btn-primary">
                                儲存
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter()
        let Shop_ManagerID = sessionStorage.getItem('Shop_ManagerID')
        let ShopID = sessionStorage.getItem('Shop_ID')
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
        if (!token) {
            router.push('/shop_login') // 未登入，導回登入頁面
        }
        let ShopInfo = ref({
            ShopID: '',
            Shop_Name: '',
            Shop_Description: '',
            Shop_IMGURL: '',
            Shop_Type: '',
            Shop_delivery: ''
        })
        onMounted(() => {
            get_ShopUser()
        })
        //取商店管理員ID並且取得商店資料
        const get_ShopUser = function () {
            if (!Shop_ManagerID) {
                return;
            }
            axios.get(`http://localhost:3000/shop/?Shop_ManagerID=${Shop_ManagerID}`)
                .then((res) => {
                    console.log(res.data)
                    ShopInfo.value = res.data.data
                });
        };

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
            ShopInfo.value.Shop_IMGURL = e.target.result
        }
        const onFileChange = function () {
            const formData = new FormData();
            formData.append('image', uploadIMG);
            axios.post('http://localhost:3000/api/upload-image', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
                .then(response => {
                    ShopInfo.value.Shop_IMGURL = response.data.IMG_Path
                });
        }
        const updateShop = function () {
            axios.put('http://localhost:3000/upadte-shop', ShopInfo.value).then((res) => {
                if (res.data.status === 200) {
                    console.log(res)
                    get_ShopUser()
                }
            })
        }
        return {
            ShopInfo,
            uploadfile,
            onFileChange,
            updateShop
        }
    }
}
</script>