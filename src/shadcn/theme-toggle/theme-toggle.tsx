"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

export default function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <button onClick={() => setTheme('dark')}><MoonIcon /></button>
      <button onClick={() => setTheme('light')}><SunIcon /></button>
    </div>
  )
}
