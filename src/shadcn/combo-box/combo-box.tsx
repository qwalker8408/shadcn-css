"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  CommandList
} from "@/shadcn"

type comboxBoxType = {
  value: string,
  label: string,
}

export default function Combobox({ data, label = 'item', onSelect }: { data: comboxBoxType[], label: string, onSelect: (selected: Record<string, unknown>) => void }) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
        >
          {value
            ? data.find((item) => item.value === value)?.label
            : `${label}`}
          <ChevronsUpDown size="1rem" />
        </Button>
      </PopoverTrigger>
      <PopoverContent style={{ width: 200, padding: 0 }}>
        <Command>
          <CommandInput placeholder={`${label}`} />
          <CommandEmpty>Not found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {data.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                    onSelect(item)
                  }}
                >
                  <Check
                    style={{
                      marginRight: '0.5rem',
                      height: '1rem',
                      width: '1rem',
                      opacity: value === item.value ? 1 : 0
                    }}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
