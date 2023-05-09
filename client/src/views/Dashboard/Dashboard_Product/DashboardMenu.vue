<template>
    <div class="row p-3 border">
        <div class="col-9">
            <div>
                <ul class="product-menu d-flex justify-content-sm-around">
                    <router-link class="nav-link" to="/dashboard/product/product-list">
                        <li>產品列表</li>
                    </router-link>
                    <router-link class="nav-link" to="/dashboard/product/product-type">
                        <li>類別</li>
                    </router-link>
                    <router-link class="nav-link" to="/dashboard/product/option-group">
                        <li>客製化群組</li>
                    </router-link>
                </ul>
            </div>
        </div>
        <div class="col"></div>
    </div>
    <section>
        <RouterView></RouterView>
    </section>
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
            axios.get(`http://localhost:3000/shop/?Shop_ManagerID=${Shop_ManagerID}`)
                .then((res) => {
                    console.log(res.data)
                    ShopInfo.value = res.data.data
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