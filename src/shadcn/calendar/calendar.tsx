"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import 'react-day-picker/dist/style.css';

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      weekStartsOn={1}
      components={{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        IconLeft: ({ ...props }) => <ChevronLeft color="currentColor" />,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        IconRight: ({ ...props }) => <ChevronRight color="currentColor" />,
      }}
      modifiersStyles={{
        selected: {
          backgroundColor: 'hsl(var(--foreground))',
          color: 'hsl(var(--background))',
          borderRadius: '0.275rem'
        },
      }}
      styles={{
        root: {
          width: 'max-content',
          margin: 0,
          color: 'hsl(var(--foreground))',
          background: 'hsl(var(--background))',
          border: `1px solid hsl(var(--border))`,
          borderRadius: 'var(--radius)',
          padding: '0.5rem',
          position: 'relative'
        },
        table: {
          paddingTop: '1rem'
        },
        head_cell: {
          color: 'hsl(var(--muted-foreground))',
          fontSize: '0.8rem',
          fontWeight: 400
        },
        day: {
          backgroundColor: 'hsl(var(--background))',
          display: 'flex',
          justifyContent: 'center',
          border: 'none',
          padding: '0.5rem',
          margin: 'auto',
          fontSize: '0.8rem',
        },
        caption: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        nav_button_previous: {
          color: 'hsl(var(--foreground))',
          background: 'transparent',
          border: '0.5px solid hsl(var(--border))',
          position: 'absolute',
          top: '0.5rem',
          left: '0.5rem',
          borderRadius: 'var(--radius)',
          padding: '0.175rem',
          width: 'max-content',
          height: 'max-content'
        },
        nav_button_next: {
          color: 'hsl(var(--foreground))',
          background: 'transparent',
          border: '0.5px solid hsl(var(--border))',
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
          borderRadius: 'var(--radius)',
          padding: '0.175rem',
          width: 'max-content',
          height: 'max-content'
        },
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export default Calendar;
