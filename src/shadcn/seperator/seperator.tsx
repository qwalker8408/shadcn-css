"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import styles from "./index.module.css"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={`
    ${styles.Separator}
     ${orientation === "vertical" && styles.ScrollBarVertical} 
     ${orientation === "horizontal"
          ? styles.SeparatorHorizontal
          : styles.SeparatorVertical}`}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export default Separator;
