"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onCheckedChange?: (checked: boolean) => void;
  defaultChecked?: boolean;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, onCheckedChange, defaultChecked, ...props }, ref) => {
    const [checked, setChecked] = React.useState(defaultChecked || false);

    const handleToggle = () => {
      const newState = !checked;
      setChecked(newState);
      if (onCheckedChange) {
        onCheckedChange(newState);
      }
    };

    return (
      <label className={cn(
        "relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        checked ? "bg-primary" : "bg-input",
        className
      )}>
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={handleToggle}
          ref={ref}
          {...props}
        />
        <span
          className={cn(
            "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform",
            checked ? "translate-x-5" : "translate-x-0.5"
          )}
        />
      </label>
    )
  }
)
Switch.displayName = "Switch"

export { Switch }
