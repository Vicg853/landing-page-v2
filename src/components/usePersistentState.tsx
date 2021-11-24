import { useEffect, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'

function usePersistentState<Type>(defaultValue: Type, key: string): [Type, Dispatch<SetStateAction<Type>>] {
   //* Defining state and doing first localhost load if the following 
   //* is already available
   const [value, setValue] = useState(() => { 
      if(typeof window !== 'undefined') {
         const storedValue = window.localStorage.getItem(key)
         return storedValue !== null ? JSON.parse(storedValue) : defaultValue
      }
      return defaultValue
   })

   //* Get's value in case localStorage value is update
   //? Is used after localStorage is firstly available on page render and
   //? when an other usePersistentState hook, that calls the same key changes something
   if(typeof window !== 'undefined') window.addEventListener('storage', (event) => {
      if(event.key !== key) return

      const val = window.localStorage.getItem(key)
      if(val !== null && val !== value) setValue(JSON.parse(val))
   })

   //* Updating localStorage value on state change, so the value persists simply
   useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value))
   }, [key, value])
   return [value, setValue]
}

export default usePersistentState