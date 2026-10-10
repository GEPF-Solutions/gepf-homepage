import { useEffect } from 'react'

// While the visitor is on another tab, our tab title asks them to come back.
export default function useComeBackTitle() {
  useEffect(() => {
    const original = document.title
    const onChange = () => {
      document.title = document.hidden ? 'come back :(' : original
    }
    document.addEventListener('visibilitychange', onChange)
    return () => {
      document.removeEventListener('visibilitychange', onChange)
      document.title = original
    }
  }, [])
}
