'use client';
import { useState } from 'react';

import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import {
  MenuItem,
  InputAdornment,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { usePathname } from 'next/navigation';

type Period = {
  label: string;
  value: string;
};

/**
 * Readonly periods with important order. Don't change the indexes of array
 */
const PERIODS: Readonly<Array<Period>> = [
  { label: 'Last week', value: '1' },
  { label: 'Last 2 week', value: '2' },
  { label: 'Last month', value: '3' },
];

interface PeriodSelectorProps {
  period: Period['value'];
  onPeriodChange: (event: SelectChangeEvent) => void;
}

const PeriodSelector = ({ period, onPeriodChange }: PeriodSelectorProps) => {
  return (
    <Select
      className="min-w-[9.5rem] rounded-lg"
      value={period}
      onChange={onPeriodChange}
      renderValue={(value) => (
        <div className="flex items-center justify-start text-title-small">
          <InputAdornment position="start">
            <CalendarMonthTwoToneIcon fontSize="small" />
          </InputAdornment>
          {PERIODS[+value - 1].label}
        </div>
      )}
      size="small"
    >
      {PERIODS.map(({ label, value }) => {
        return (
          <MenuItem key={label} value={value} className="text-title-small">
            {label}
          </MenuItem>
        );
      })}
    </Select>
  );
};

export const PagesHeader = () => {
  const pathname = usePathname();
  const [period, setPeriod] = useState(PERIODS[0].value);

  const onPeriodChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value);
  };

  // also, we can use an object for mapping every url address to a title; instead of using split function
  return (
    <header className="flex items-center justify-between bg-surfaceContainerLow px-8 py-10">
      <span className="text-title-large capitalize">
        {pathname?.split('/').at(1) || ''}
      </span>
      <PeriodSelector period={period} onPeriodChange={onPeriodChange} />
    </header>
  );
};
