import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import {
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

import { FixHydration } from '@/components/fix-hydration/FixHydration';
import { TimePeriod } from '@/utils/types';

type Period = {
  label: string;
  value: string;
};

/**
 * Readonly periods with important order. Don't change the indexes of array
 */
export const PERIODS: Readonly<Array<Period>> = [
  { label: 'Last week', value: TimePeriod['LAST_WEEK'] },
  { label: 'Last month', value: TimePeriod['LAST_MONTH'] },
  { label: 'Last year', value: TimePeriod['LAST_YEAR'] },
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
        className="rounded-lg lg:min-w-[9.5rem]"
        value={period}
        onChange={onPeriodChange}
        renderValue={(value) => (
          <div className="flex items-center justify-start text-title-small">
            <InputAdornment position="start">
              <CalendarMonthTwoToneIcon fontSize="small" />
            </InputAdornment>
            {PERIODS.find(({ value: period }) => period === value)?.label}
          </div>
        )}
        size="small"
        MenuProps={{ MenuListProps: { className: 'py-0' } }}
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
