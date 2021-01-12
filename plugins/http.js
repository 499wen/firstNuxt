import Vue from 'vue'
import axios from 'axios'

const https = {
    // axios
    // .get(`api/hzkj/findProductClassification`)
    // .then(res => {
    //     callback(null, { title: res.data })
    // })
    // .catch(e => {
    //     callback({ statusCode: 404, message: 'Post not found' })
    // })

    //get请求
    get(url, params={}){
        return new Promise((resolve, reject) => {
            axios.get(url,params).then(response => {
                    resolve(response.data);
                }).catch(error => {
                    reject(error)
                })
        })
    },
 
    //post请求
    post(url, params= {}){
        return new Promise((resolve, reject) => {
            axios.post(url,params).then(response => {
                    resolve(response.data);
                }).catch(error => {
                    reject(error)
                })
            })
    }

}

Vue.prototype.$https = https