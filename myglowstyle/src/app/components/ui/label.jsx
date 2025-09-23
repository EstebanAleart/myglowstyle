import React from "react"
import { cn } from "@/lib/utils"

const Label = React.forwardRef(({ className, htmlFor, children, ...props }, ref) => {
  return (
    <label
      ref={ref}
      htmlFor={htmlFor}
      className={cn(
        "block text-sm font-medium text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </label>
  )
})

Label.displayName = "Label"

export { Label }
