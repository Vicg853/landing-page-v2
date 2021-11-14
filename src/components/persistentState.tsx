import { useEffect, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'

function persistentState<Type>(defaultValue: Type, key: string): [Type, Dispatch<SetStateAction<Type>>] {
   const [value, setValue] = useState(() => { 
      if(typeof window !== 'undefined') {
         const storedValue = window.localStorage.getItem(key)
         return storedValue ? JSON.parse(storedValue) : defaultValue
      }
      return
   })

   useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value))
   }, [key, value])
   return [value, setValue]
}

export default persistentState