import api from '@/services/api'

export default {
  register (credenials) {
    return api().post('register', credenials)
  }
}
// 註冊
// AuthenticationService.register({
//     name: "ekko",
//     email: "ekko@gmail.com",
//     password: '123456'
// })
