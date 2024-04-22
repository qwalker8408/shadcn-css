"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import styles from "./index.module.css"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={styles.Slider}
    {...props}
  >
    <SliderPrimitive.Track className={styles.SliderTrack}>
      <SliderPrimitive.Range className={styles.SliderRange} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={styles.SliderThumb} />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export default Slider;
