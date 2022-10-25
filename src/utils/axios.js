// import axios from 'axios'
const axios = require('axios').default
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

// const handleRegister = (e) => {
//   e.preventDefault()

//   if (password.current.value === verifyPassword.current.value) {
//     const newUser = {
//       username: username.current.value,
//       first_name: firstName.current.value,
//       last_name: lastName.current.value,
//       email: email.current.value,
//       password: password.current.value,
//       company: company.current.value,
//       role: role.current.value,
//       phone: phone.current.value,
//       account_type: parseInt(accountType.current.value),
//     }

//     return fetch(`${process.env.REACT_APP_API}/register`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//       body: JSON.stringify(newUser),
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         if (res.valid) {
//           localStorage.setItem('user_token', res.token)
//           props.history.push('/bookings')
//         } else {
//           // TODO: return error reason from server to display in popup
//           handleOpen(res.reason)
//         }
//       })
//       .catch((err) => {
//         console.error(err)
//       })
//   } else {
//     handleOpen('password')
//   }
// }

// const fetchBooking = () => {
//   return fetch(`${process.env.REACT_APP_API}/${endpoint}/${instance}`, {
//     headers: {
//       Authorization: `Token ${token}`,
//     },
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       res.step = 1
//       res.instance = instance
//       setFormValues(res)
//     })
// }

// const create = (e) => {
//   console.table('all values')
//   e.preventDefault()
//   console.table(formValues)
//   console.log('--- token is ', token)

//   return fetch(`${process.env.REACT_APP_API}/bookings`, {
//     method: 'POST',
//     headers: {
//       Authorization: `Token ${token}`,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(formValues),
//   })
//     .then(() => {
//       history.push('/bookings')
//     })
//     .catch((err) => console.error('POST Error: ', err))
// }

// const update = (e) => {
//   console.table('all values')
//   e.preventDefault()
//   console.table(formValues)
//   console.log('--- token is ', token)

//   return fetch(`${process.env.REACT_APP_API}/bookings/${formValues.instance}`, {
//     method: 'PUT',
//     headers: {
//       Authorization: `Token ${token}`,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(formValues),
//   })
//     .then(() => {
//       history.push('/bookings')
//     })
//     .catch((err) => console.error('POST Error: ', err))
// }

// fetch(`${process.env.REACT_APP_API}/bookings`, {
//   headers: {
//     Authorization: `Token ${token}`,
//   },
// })
//   .then((res) => res.json())
//   .then((res) => {
//     res = res.filter((r) => parseInt(r.id) === parseInt(id))[0]
//     const addStep = { ...res }
//     addStep['step'] = 2
//     return addStep
//   })
//   .then((res) => {
//     setFormValues(res)
//     setIsLoading(false)
//   })

// return fetch(`${process.env.REACT_APP_API}/bookings`, {
//   headers: {
//     Authorization: `Token ${token}`,
//   },
// })
//   .then((res) => res.json())
//   .then((res) => {
//     // get the container that the product belongs to

//     const container = res.find((obj) => {
//       const prodIndex = obj.products.find(
//         (prod) => parseInt(prod.product_id) === parseInt(id),
//       )

//       if (prodIndex !== undefined) {
//         return obj
//       }
//       return undefined
//     })

//     const addStep = { ...container }
//     addStep['step'] = 3

//     return addStep
//   })
//   .then((res) => {
//     setFormValues(res)
//     setIsLoading(false)
//   })
