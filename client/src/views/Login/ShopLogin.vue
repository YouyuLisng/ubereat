<template>
    <div class="container">
        <nav class="navbar navbar-light">
            <div class="container-fluid">
                <RouterLink class="navbar-brand" to="/feed">
                    <img src="../../image/logo_kitahora.svg" width="195" height="60" alt="">
                </RouterLink>
            </div>
        </nav>
        <div class="container main">
            <div class="row gy-3">
                <div class="col-12 text-center">
                    <h1>商店後台登入</h1>
                </div>
                <div class="col-12">
                    <div>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            v-model="Shop_Manager.Shop_Manager_Account" placeholder="請輸入電子郵件">
                    </div>
                </div>
                <div class="col-12">
                    <input type="password" class="form-control" id="exampleFormControlInput2"
                        v-model="Shop_Manager.Shop_Manager_Password" placeholder="請輸入密碼">
                </div>
                <div class="col-12">
                    <button @click="login" style="width: 100%;" type="button" class="btn btn-dark">繼續</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.main {
    max-width: 360px;
    margin: 0 auto;
}

.main h1 {
    font-size: 24px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
}
</style>
  
<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
export default {
    setup() {
        let Shop_Manager = {
            Shop_Manager_Account: '',
            Shop_Manager_Password: '',
        }
        const route = useRouter()
        const api = 'http://localhost:3000/shop_login'
        let login = function () {
            axios.post(api, Shop_Manager).then((res) => {
                if (res.data.status === 200) {
                    console.log(res.data)
                    const token = res.data.token
                    const expires = new Date(Date.now() + 60 * 10).toUTCString() // 10 分鐘後的 UTC 時間字串
                    document.cookie = `token=${token};expires=${new Date(expires)};`
                    route.push('/dashboard')
                } else {
                    console.log(res)
                }
            })
        }
        return {
            Shop_Manager,
            login
        }
    }
}
</script>
  