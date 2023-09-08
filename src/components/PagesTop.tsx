'use client';
import React, { useState } from 'react';

import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { usePathname } from 'next/navigation';

const PERIODS = [
  { label: 'Last week', value: '1' },
  { label: 'Last 2 week', value: '2' },
  { label: 'Last month', value: '3' },
];
const PagesTop = () => {
  const pathname = usePathname();
  const [period, setPeriod] = useState(PERIODS[0].value);

  const handleChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value as string);
  };

  // also, we can use an object for mapping every url address to a title; instead of using split function
  return (
    <header className="flex items-center justify-between bg-surfaceContainerLow p-6">
      <span className="text-title-large capitalize">
        {pathname?.split('/').at(1) || ''}
      </span>
      <Select value={period} onChange={handleChange} displayEmpty>
        {PERIODS.map(({ label, value }) => {
          return (
            <MenuItem key={label} value={value}>
              {label}
            </MenuItem>
          );
        })}
      </Select>
    </header>
  );
};

export { PagesTop };
