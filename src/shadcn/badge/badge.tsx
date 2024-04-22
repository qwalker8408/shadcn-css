import * as React from "react"
import styles from './index.module.css'

interface BadgeProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'destructive' | 'outline' | 'secondary';
  size?: 'sm' | 'lg' | 'icon'
}

function Badge({ variant, ...props }: BadgeProps) {
  return (
    // @ts-expect-error lol
    <div
      data-variant={variant}
      className={styles.Badge}
      {...props} />
  )
}

export default Badge;
