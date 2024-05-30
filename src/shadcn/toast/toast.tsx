"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

import styles from './index.module.css'

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="Toast"
      toastOptions={{
        classNames: {
          toast: styles.Toast,
          description: styles.ToastDescription,
          actionButton: styles.ToastActionButton,
          cancelButton: styles.ToastCancelButton,
        },
      }}
      {...props}
    />
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { Toaster, toast }
