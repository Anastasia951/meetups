import { useEffect, useState } from 'react'

export function useDebounce<T>(val: T, delay = 300): T {
  const [debounced, setDebounced] = useState(val)
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(val), delay)
    return () => clearTimeout(handler)
  }, [val, delay])
  return debounced
}
