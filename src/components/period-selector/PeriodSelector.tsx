import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import {
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

import { FixHydration } from '@/components/fix-hydration/FixHydration';

type Period = {
  label: string;
  value: string;
};

/**
 * Readonly periods with important order. Don't change the indexes of array
 */
export const PERIODS: Readonly<Array<Period>> = [
  { label: 'Last week', value: '1' },
  { label: 'Last 2 week', value: '2' },
  { label: 'Last month', value: '3' },
];

interface PeriodSelectorProps {
  period: Period['value'];
  onPeriodChange: (event: SelectChangeEvent) => void;
}

export const PeriodSelector = ({
  period,
  onPeriodChange,
}: PeriodSelectorProps) => {
  return (
    <FixHydration>
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
    </FixHydration>
  );
};
