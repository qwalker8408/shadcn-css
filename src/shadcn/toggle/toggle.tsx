/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import styles from './index.module.css'

const toggleVariants = cva(
  styles.Toggle,
  {
    variants: {
      variant: {
        default: styles.ToggleDefault,
        outline: styles.ToggleOutline,
      },
      size: {
        default: styles.ToggleDefaultSize,
        sm: styles.ToggleSmallSize,
        lg: styles.ToggleLargeSize,
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={toggleVariants({ variant, size, className })}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
