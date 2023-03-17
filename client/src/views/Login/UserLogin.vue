<template>
  <div class="container">
    <nav class="navbar navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="../../image/logo_kitahora.svg" width="195" height="60" alt="">
        </a>
      </div>
    </nav>
    <div class="container main">
      <div class="row gy-3">
        <div class="col-12 text-center">
          <h1>登入</h1>
        </div>
        <div class="col-12">
          <div>
            <input type="email" class="form-control" id="exampleFormControlInput1" v-model="User.User_Account"
              placeholder="請輸入電子郵件">
          </div>
        </div>
        <div class="col-12">
          <input type="password" class="form-control" id="exampleFormControlInput2" v-model="User.User_Password"
            placeholder="請輸入密碼">
        </div>
        <div class="col-12">
          <button @click="login" style="width: 100%;" type="button" class="btn btn-dark">繼續</button>
        </div>
        <div class="col-12">
          <hr>
        </div>
        <div class="col-12">
          <button style="width: 100%;" type="button" class="btn btn-secondary">
            <div class="d-flex justify-content-center">
              <div class="me-2">
                <img src="../../image/2875404.png" width="20" height="20" alt="">
              </div>
              <div>使用Google繼續</div>
            </div>
          </button>
        </div>
        <div class="col-12">
          <button style="width: 100%;" type="button" class="btn btn-secondary">
            <div class="d-flex justify-content-center">
              <div class="me-2">
                <img src="../../image/747.png" width="20" height="20" alt="">
              </div>
              <div>使用Apple繼續</div>
            </div>
          </button>
        </div>
        <div class="col-12">
          <button style="width: 100%;" type="button" class="btn btn-secondary">
            <div class="d-flex justify-content-center">
              <div class="me-2">
                <img src="../../image/733547.png" width="20" height="20" alt="">
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
</style>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup () {
    let User = {
      User_Account: '',
      User_Password: '',
    }
    const route = useRouter()
    const api = 'http://localhost:3000/user_login'
    let login = function() {
      axios.post(api, User).then((res) => {
        if (res.data.status === 200) {
          route.push('/')
        }
      })
    }
    return {
      User,
      login
    }
  }
}
</script>
