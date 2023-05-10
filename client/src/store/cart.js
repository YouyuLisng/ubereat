import { defineStore } from 'pinia'
import axios from 'axios'

export default defineStore('ProductStore', {
    state: () => {
        return {
            productData:[],
            tempData: []
        }
    },
    actions: {
        get_product (ShopID) {
            axios.get(`http://localhost:3000/get-product?ShopID=${ShopID}`)
                .then((res) => {
                    console.log(res.data)
                    this.productData = res.data.data
                    this.tempData = res.data.data
                })
        }
    }
})