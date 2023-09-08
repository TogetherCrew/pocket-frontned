'use client';
import React, { FC, useState } from 'react';

import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import { MenuItem, TextField, InputAdornment } from '@mui/material';
import { usePathname } from 'next/navigation';

type Period = {
  label: string;
  value: string;
};

const PERIODS: Array<Period> = [
  { label: 'Last week', value: '1' },
  { label: 'Last 2 week', value: '2' },
  { label: 'Last month', value: '3' },
];

interface PeriodSelectorProps {
  period: Period['value'];
  onPeriodChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PeriodSelector: FC<PeriodSelectorProps> = ({
  period,
  onPeriodChange,
}) => {
  return (
    <TextField
      select
      value={period}
      onChange={onPeriodChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <CalendarMonthTwoToneIcon fontSize="small" />
          </InputAdornment>
        ),
      }}
      size="small"
      SelectProps={{
        classes: { select: 'text-title-small py-2' },
        MenuProps: { classes: { list: 'p-0' } },
      }}
      sx={{ width: '150px' }}
    >
      {PERIODS.map(({ label, value }) => {
        return (
          <MenuItem key={label} value={value} className="text-title-small">
            {label}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

const PagesTop = () => {
  const pathname = usePathname();
  const [period, setPeriod] = useState(PERIODS[0].value);

  const onPeriodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPeriod(event.target.value);
  };

  // also, we can use an object for mapping every url address to a title; instead of using split function
  return (
    <header className="flex items-center justify-between bg-surfaceContainerLow p-6">
      <span className="text-title-large capitalize">
        {pathname?.split('/').at(1) || ''}
      </span>
      <PeriodSelector period={period} onPeriodChange={onPeriodChange} />
    </header>
  );
};

export { PagesTop };
