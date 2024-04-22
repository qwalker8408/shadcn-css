"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import styles from './index.module.css'

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={styles.Avatar}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={styles.AvatarImage}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={styles.AvatarFallback}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
