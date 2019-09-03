

export const proHost = 'http://rent.52elven.com/gateway' //生产环境

export const devHost = 'http://192.168.0.130:8001' //徐江

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
  student: {
    list: BASE_API_URL + '/student/list',
    student: BASE_API_URL + '/student'
  }
}

export default Api