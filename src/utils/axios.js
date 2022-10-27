import axios from 'axios'
// const axios = require('axios').default
const axiosInstance = axios.create()

// Axios will remember that baseURL, plus other values you might
//  want to specify for every request, including headers
axiosInstance.defaults.baseURL = process.env.REACT_APP_API
axiosInstance.defaults.timeout = 5000
axiosInstance.defaults.headers.common['Accept'] = 'application/json'
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json'

axiosInstance.interceptors.request.use((request) => {
  const token = localStorage.getItem('user_token')

  if (token) {
    request.headers.Authorization = `Token ${token}`
  }

  return request
})

export default axiosInstance
