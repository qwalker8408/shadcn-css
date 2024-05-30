import * as React from "react"
import { Button } from '@/shadcn'
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons"

import styles from './index.module.css'
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onPasswordVisible?: (name: string) => void
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, onPasswordVisible, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false)

    function handlePasswordEye() {
      setIsVisible(prevState => !prevState)
      if (isVisible && onPasswordVisible) {
        onPasswordVisible(props.name || '')
      }
    }

    if (type === 'password') {
      return (
        <div style={{ position: 'relative', width: 'max-content' }}>
          <input
            type={type}
            className={styles.Input}
            ref={ref}
            {...props}
          />
          {type === 'password' ? (
            <Button type="button" variant="ghost" onClick={handlePasswordEye} className={styles.passwordButton}>
              {isVisible ? (
                <EyeOpenIcon />
              ) : (
                <EyeClosedIcon />
              )}
            </Button>
          ) : null}
        </div>
      )
    }

    return (
      <input
        type={type}
        className={styles.Input}
        ref={ref}
        {...props}

      />

    )
  }
)
Input.displayName = "Input"

export default Input
