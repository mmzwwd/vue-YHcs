// axios配置
import axios from 'axios'
import promise from 'es6-promise'
import apiPath from './path.js'
import Vue from 'vue'
// import store from '../store'
import Cookies from "js-cookie";
import { MessageBox } from 'element-ui';

promise.polyfill()
axios.defaults.withCredentials = false
axios.defaults.headers.common['Content-Type'] = 'application/json, text/plain'
axios.defaults.retry = 4
axios.defaults.retryDelay = 1000

/*************************loadingStart************************* */
var loading, num = 0

function startLoading() {
    loading = Vue.prototype.$loading({
        lock: true,
        text: '加载中……',
        // spinner: 'el-icon-loading',
        // background: 'rgba(0, 0, 3, 0.7)'
    })
}

function endLoading() {
    num = 0
    loading.close()
}
/**************************loadingEnd************************ */
function signOut () {
    Cookies.remove('ds_token');
    Cookies.remove('ds_id');
    Cookies.remove('ds_actor');
     location.reload();
  }
/**************************pushLoadingStart************************ */

axios.interceptors.request.use(function(config) {
    num++
    startLoading()
    return config
})
axios.interceptors.response.use(
    response => {
      num--
      if (num <= 0) {
        let timer = setTimeout(() => {
          endLoading()
          clearTimeout(timer)
        }, 300)
      }
      if (response.config.responseType != 'arraybuffer') {
        switch (response.data.code) {
          case 200:
            break
          case 0:
            Vue.prototype.$message({
              type: 'error',
              message: response.data.msg
            })
            break
        }
      } else {
      }
      return response
    },
    error => {
      num--
      if (num <= 0) {
        let timer = setTimeout(() => {
          endLoading()
          clearTimeout(timer)
        }, 300)
      }
      if (error.response) {
        // console.log(error.response.status)
        switch (error.response.status) {
          case 401:
            MessageBox.alert('登录信息失效,请重新登录', '提示', {
                confirmButtonText: '确定',
                showClose:false,
                type: 'warning'
              }).then(() => {
                signOut()
              })
              .catch(() => {
                signOut()
              });
            break
          case 404:
            break
          case 500:
            break
          case 400:
            break
        }
      }
    }
  )
    /**************************pushLoadingEnd************************ */

/**
 * @param {请求地址} url
 * @param {请求参数} data
 * @param {Post/Get 默认get} method
 */
const http = (url, data, method = 'GET', responseType = 'json') => {
    return new Promise((resolve, reject) => {
        // let token = store.state.token  token: 'token'
        let obj = {
          // token: Cookies.get('ds_token')
        }
        if (method == 'GET') {
            obj = Object.assign(obj, data)
        }
        axios({
            method: method,
            url: url,
            params: obj,
            data: data,
            headers: {'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjdXJyZW50VGltZSI6MTYwNzQ5Mzc1MjExMiwiaXNzIjoiYXV0aDAiLCJleHAiOjE2MDc0OTQwNTIsImFjY291bnQiOiJjdWdiYWRtaW4ifQ.yvah5Kv1-m6QcS2oRjsl5XQeD0U6QCJSD3WZQXZLcYE'},
            responseType: responseType
        }).then(function(response) {
          if (response.data.code == 200 && response.status == 200) {
                resolve(response.data)
            } else {
              // console.log(response.data.msg)
                resolve(response.data)
                if(response.data.msg){
                    Vue.prototype.$message({
                        type: 'error',
                        message: response.data.msg
                    })
                }

            }
        }).catch(function(error) {
            Vue.prototype.$message({
                type: 'error',
                message: error.response.data.msg
            })
            reject(error)
            let timer = setTimeout(() => {
                clearTimeout(timer)
                endLoading()
            }, 300)
        })
    })
}

export {
    http,
    apiPath,
    axios
}
