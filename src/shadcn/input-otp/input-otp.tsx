"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"

import styles from './index.module.css'

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={`${styles.InputOTPContainer} ${containerClassName}`}
    className={styles.InputOTP}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} className={styles.InputOTPGroup} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  // @ts-expect-error lol
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={`${styles.InputOTPSlot} ${isActive && styles.InputOTPSlotActive}`}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className={styles.InputOTPSlotCaretContainer}>
          <div className={styles.InputOTPSlotCaret} />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
