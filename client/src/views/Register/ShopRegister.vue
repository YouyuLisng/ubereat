<template>
    <div class="container">
        <nav class="navbar navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="../../image/logo_kitahora.svg" width="195" height="60" alt="">
                </a>
            </div>
        </nav>
        <div class="container main mb-2">
            <div class="row gy-3" v-if="isShow">
                <div class="col-12 text-center">
                    <h1>解鎖新的營收來源！</h1>
                </div>
                <div class="col-12">
                    <div>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="請輸入您的名字"
                            v-model="Shop_Manager.Shop_Manager_Name">
                    </div>
                </div>
                <div class="col-12">
                    <div>
                        <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="請輸入電子郵件"
                            v-model="Shop_Manager.Shop_Manager_Account">
                    </div>
                </div>
                <div class="col-12">
                    <input type="password" class="form-control" id="exampleFormControlInput3" placeholder="請輸入密碼"
                        v-model="Shop_Manager.Shop_Manager_Password">
                </div>
                <div class="col-12">
                    <div>
                        <input type="text" class="form-control" id="exampleFormControlInput4" placeholder="請輸入手機號碼"
                            v-model="Shop_Manager.Shop_Manager_Phone">
                    </div>
                </div>
                <div class="col-12">
                    <button @click="register" style="width: 100%;" type="button" class="btn btn-dark">繼續</button>
                </div>
                <div class="col-12">
                    <hr>
                </div>
            </div>
            <div class="row gy-3" v-else>
                <div class="col-12 text-center">
                    <h1>填寫商店資訊</h1>
                </div>
                <div class="col-12">
                    <div>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="餐應名稱" v-model="Shop.Shop_Name"> 
                    </div>
                </div>
                <div class="col-12">
                    <div>
                        <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="餐廳地址" v-model="Shop.Shop_Address">
                    </div>
                </div>
                <div class="col-12">
                    <select class="form-select" aria-label="Default select example" v-model="Shop.Shop_Type">
                        <option selected>業務類型</option>
                        <option value="餐廳">餐廳</option>
                        <option value="便利商店">便利商店</option>
                        <option value="藥局">藥局</option>
                        <option value="酒類專賣店">酒類專賣店</option>
                    </select>
                </div>
                <div class="col-12">
                    <button @click="restaurant" style="width: 100%;" type="button" class="btn btn-dark">送出</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style>
.main {
    max-width: 360px;
    margin: 0 auto;
}

.main h1 {
    font-size: 24px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
}

.main button {
    letter-spacing: 2px;
    font-weight: 500;
}
</style>
  
<script>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
    setup() {
        let isShow = ref(true)
        const route = useRouter()
        let data = {}
        let Shop_Manager = {
            Shop_Manager_Name: '',
            Shop_Manager_Account: '',
            Shop_Manager_Password: '',
            Shop_Manager_Phone: '',
            Shop_Manager_Rights: 1
        }
        //註冊管理員
        let register = function () {
            const api = 'http://localhost:3000/ShopRegister'
            axios.post(api, Shop_Manager).then((res) => {
                console.log(res)
                if (res.data.status === 200) {
                    data = res.data
                    console.log('data', data)
                    isShow.value = false
                }
            })
        }
        let Shop = {
            Shop_ManagerID: data.Shop_ManagerID,
            Shop_Name: '',
            Shop_Address: '',
            Shop_Type: ''
        }
        let restaurant = function() {
            console.log(Shop)
            Shop.Shop_ManagerID = data.Shop_ManagerID
            const api = 'http://localhost:3000/restaurant'
            axios.post(api, Shop).then((res) => {
                console.log(res)
                route.push('/shop_login')
            })
        }
        return {
            isShow,
            Shop_Manager,
            Shop,
            register,
            restaurant
        }
    }
}
</script>
  