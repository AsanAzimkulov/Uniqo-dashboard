import {useDebounce, useDebounceCallback} from '@react-hook/debounce'
import { useState } from 'react'


export const useMyCallback = (initialState, wait, leading) => {
  // this is the same code useDebounce() uses to debounce setState
  const [state, setState] = useState(initialState)
  return [state, useDebounceCallback(setState, wait, leading)]
}