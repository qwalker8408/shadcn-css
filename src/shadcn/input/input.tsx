import * as React from "react"
import styles from './index.module.css'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, ...props }, ref) => {
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
