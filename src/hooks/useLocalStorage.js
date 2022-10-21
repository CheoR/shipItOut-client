import { useEffect, useState } from 'react'

// Hook
export default function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [token, setLocalToken] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      console.log(error)
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setToken = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(token) : value
      // Save state
      setLocalToken(valueToStore)
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error)
    }
  }

  useEffect(() => {}, [key, token])
  return [token, setToken]
}

// export default function useLocalStorage(key, initialValue = null) {
//   const [value, setValue] = useState(() => {
//     const storedValue = localStorage.getItem(key)
//     if (storedValue !== null) return JSON.parse(storedValue)

//     if (typeof initialValue === 'function') {
//       return initialValue()
//     } else {
//       return initialValue
//     }
//   })

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value))
//   }, [key, value])

//   return [value, setValue]
// }

// function useLocalStorage(key, initialValue) {
//   const storedValue = JSON.parse(localStorage.getItem(key))
//   if (storedValue) return storedValue
//   if (initialValue instanceof Function) return initialValue()
//   return initialValue
//   // console.log(`test useLocalStorage key: ${key} value: ${initialValue}`)
//   // if (key === undefined || initialValue === undefined) return initialValue

//   // const value = localStorage.getItem(key)
//   // console.log('test useLocalStorage value: ', value)
//   // if (value === undefined) return initialValue
//   // let token
//   // try {
//   //   token = JSON.parse(value)
//   // } catch (error) {
//   //   console.error('\n\n COULD  NOT PRASE JSON')
//   // }
//   // if (token !== null) return token
//   // if (initialValue instanceof Function) return initialValue()
//   // return initialValue
// }

// export default function useLocalStorage(key, initialValue = null) {
//   console.log(`test useLocalStorage key: ${key} initialValue: ${initialValue}`)
//   const [value, setValue] = useState(() => {
//     return useLocalStorage(key, initialValue)
//   })

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value))
//   }, [key, value])

//   return [value, setValue]
// }
