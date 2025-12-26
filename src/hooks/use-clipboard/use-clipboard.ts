'use client'
import { useState, useCallback, useEffect } from "react";

export const useClipboard = ({ timeout = 2000 }) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = useCallback((text: string) => {
    try {
      const textarea = document.createElement("textarea")
      textarea.value = text
      textarea.style.position = "fixed"
      textarea.style.opacity = "0"

      document.body.appendChild(textarea)
      textarea.focus()
      textarea.select()

      const success = document.execCommand("copy")
      document.body.removeChild(textarea)

      setIsCopied(success)

      return success
    } catch (error) {
      console.error("Erro ao copiar:", error)
      setIsCopied(false)
      return false
    }
  }, [])

  useEffect(() => {
    if (!isCopied) return
    const timer = setTimeout(() => setIsCopied(false), timeout)
    return () => clearTimeout(timer)
  }, [isCopied, timeout])

  return { isCopied, handleCopy }
}
