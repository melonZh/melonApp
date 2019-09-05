

export const proHost = 'http://rent.52elven.com/gateway' //生产环境

export const devHost = 'http://192.168.0.103:8001' //徐江

let host = ''
if (process.env.NODE_ENV !== 'production') {
  host = devHost
} else {
  host = proHost
}

const systemName = '/hm-rent-finance'
const userSystem = '/hm-rent-user'

export const BASE_API_URL = host + systemName


const Api = {
  user: {
    login: proHost+ userSystem + '/login',
  },
  platform: { // 平台配置
    table: {
      list: BASE_API_URL+ '/table/list', // get 表单列表
      table: BASE_API_URL+ '/table', // post put 单个表单增改
      view: BASE_API_URL + '/table/edit', // get 编辑前查看
    }
  },
}

export default Api