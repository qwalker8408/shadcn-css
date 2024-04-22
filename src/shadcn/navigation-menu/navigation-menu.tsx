import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { ChevronDown } from "lucide-react"

import styles from './index.module.css'

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={styles.NavigationMenu}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={styles.NavigationMenuList}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item



// https://ui.shadcn.com/docs/components/navigation-menu
// to use with a next-link
//   <NavigationMenuItem >
//   <Link href="/docs" legacyBehavior passHref>
//     <NavigationMenuLink className="next-link">
//       Documentation
//     </NavigationMenuLink>
//   </Link>
// </NavigationMenuItem>
const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={styles.NavigationMenuTrigger}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className={styles.NavigationMenuTriggerChevronDown}
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={styles.NavigationMenuContent}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ ...props }, ref) => (
  <div className={styles.NavigationMenuViewportDiv}>
    <NavigationMenuPrimitive.Viewport
      className={styles.NavigationMenuViewport}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={styles.NavigationMenuIndicator}
    {...props}
  >
    <div className={styles.NavigationMenuIndicatorDiv} />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
