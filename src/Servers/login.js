import axios from 'axios'

import Api from 'Apis/Api.js'



// 登录

export const _login = async data => {
  console.log('data===>', data)
  return await axios.post(Api.user.login, data)
}