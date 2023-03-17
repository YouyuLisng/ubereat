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
      <div class="row gy-3">
        <div class="col-12 text-center">
          <h1>註冊帳號</h1>
        </div>
        <div class="col-12">
          <div>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="請輸入名稱" v-model="User.User_Name">
          </div>
        </div>
        <div class="col-12">
          <div>
            <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="請輸入電子郵件" v-model="User.User_Account">
          </div>
        </div>
        <div class="col-12">
          <input type="password" class="form-control" id="exampleFormControlInput3" placeholder="請輸入密碼" v-model="User.User_Password">
        </div>
        <div class="col-12">
          <div>
            <input type="text" class="form-control" id="exampleFormControlInput4" placeholder="請輸入手機號碼" v-model="User.User_Phone">
          </div>
        </div>
        <div class="col-12">
          <button @click="register" style="width: 100%;" type="button" class="btn btn-dark">繼續</button>
        </div>
        <div class="col-12">
          <hr>
        </div>
        <div class="col-12">
          <button style="width: 100%;" type="button" class="btn btn-secondary">
            <div class="d-flex justify-content-center">
              <div class="me-2">
                <img src="../../image/2875404.png" width="18" height="18" alt="">
              </div>
              <div>使用Google繼續</div>
            </div>
          </button>
        </div>
        <div class="col-12">
          <button style="width: 100%;" type="button" class="btn btn-secondary">
            <div class="d-flex justify-content-center">
              <div class="me-2">
                <img src="../../image/747.png" width="18" height="18" alt="">
              </div>
              <div>使用Apple繼續</div>
            </div>
          </button>
        </div>
        <div class="col-12">
          <button style="width: 100%;" type="button" class="btn btn-secondary">
            <div class="d-flex justify-content-center">
              <div class="me-2">
                <img src="../../image/733547.png" width="18" height="18" alt="">
              </div>
              <div>使用Facebook繼續</div>
            </div>
          </button>
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
import { ref} from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup () {
    let User = {
      User_Name: '',
      User_Account: '',
      User_Password: '',
      User_Phone: '',
      User_Rights: 2
    }
    const route = useRouter()
    const api = 'http://localhost:3000/UserRegister'
    let register = function() {
      axios.post(api, User.value).then((res) => {
        console.log(res)
        if (res.data.status === 200) {
          route.push('/user_login')
        }
      })
    }
    return {
      User,
      register
    }
  }
}
</script>
