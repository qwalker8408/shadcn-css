"use client"

import * as React from "react"
import { format, addDays } from "date-fns"
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react"
import { DateRange } from "react-day-picker"

import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shadcn"

import styles from './index.module.css'

export default function DatePicker({ isRange }: { isRange?: boolean }) {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>(() => {
    if (isRange) {
      return {
        from: new Date(),
        to: addDays(new Date(), 1),
      }
    }
    return undefined
  })
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          className={`
            ${styles.Button}
          `}
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'transparent',
            border: 'none',
            padding: 0,
            justifyContent: 'center',
            width: 'max-content'
          }}
        >
          <CalendarIcon style={{
            marginRight: '0.5rem',
            height: '1rem',
            width: '1rem'
          }}
          />
          {isRange ? (
            dateRange?.to ? (
              <>
                {format(dateRange.from, "LLL dd, y")} -{" "}
                {format(dateRange.to, "LLL dd, y")}
              </>
            ) : (
              format(dateRange.from, "LLL dd, y")
            )
          ) : (
            <>
              <span>{date ? format(date, "PPP") : `Pick a date`}</span>
              <ChevronDown color="currentColor" size="1rem" />
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        style={{
          width: 'auto',
          padding: 0
        }}>
        <Calendar
          // initialFocus
          defaultMonth={isRange ? date?.from : date}
          mode={isRange ? "range" : "single"}
          selected={isRange ? dateRange : date}
          onSelect={isRange ? setDateRange : setDate}
          numberOfMonths={isRange ? 2 : 1}
        />
      </PopoverContent>
    </Popover>
  )
}
