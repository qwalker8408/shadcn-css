"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import styles from './index.module.css'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={styles.Checkbox}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={styles.CheckboxIndicator}
    >
      <Check
        style={{
          height: '1rem',
          width: '1rem'
        }}
      />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export default Checkbox
