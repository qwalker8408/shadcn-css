import * as React from "react"

import styles from './index.module.css'

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ ...props }, ref) => {
    return (
      <textarea
        className={styles.Textarea}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export default Textarea;
