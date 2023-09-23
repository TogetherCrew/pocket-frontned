'use client';
import { useMemo } from 'react';

import { Box, LinearProgress } from '@mui/material';

interface LinearProgressDateMetricProps {
  startDate: string;
  endDate: string;
  title: string;
  description?: string;
  color?: 'primary' | 'secondary';
}

interface CalculatedDaysType {
  totalDays: number;
  remainingDays: number;
}

export const LinearProgressDateMetric = ({
  startDate,
  endDate,
  title,
  description,
  color = 'primary',
}: LinearProgressDateMetricProps) => {
  const { remainingDays, totalDays } = useMemo((): CalculatedDaysType => {
    const startTime = new Date(startDate).getTime();
    const endTime = new Date(endDate).getTime();
    const currentTime = new Date().getTime();

    const totalDays = Math.ceil((endTime - startTime) / (1000 * 60 * 60 * 24));
    const remainingDays = Math.ceil(
      (endTime - currentTime) / (1000 * 60 * 60 * 24),
    );

    if (remainingDays <= 0) {
      return { totalDays, remainingDays: 0 };
    }

    return { totalDays, remainingDays };
  }, [startDate, endDate]);

  const startDateArray = new Date(startDate).toDateString().split(' ');
  const endDateArray = new Date(endDate).toDateString().split(' ');
  const parentTranslate = Math.ceil(
    -1 * (100 - ((totalDays - remainingDays) * 100) / totalDays),
  );
  const childTranslate = parentTranslate > -8 ? 0 : 50;

  return (
    <div className="flex w-full flex-col gap-6 rounded-2xl bg-surfaceContainerLow p-5">
      <div className="flex flex-row justify-between">
        <div className="mb-10 text-title-semi-large">
          <p className="m-0">{title}</p>
          {description ? (
            <p className="m-0 mt-1 text-body-medium text-onSurfaceVariant">
              {description}
            </p>
          ) : null}
        </div>
      </div>
      <div>
        <Box
          className="mb-1 flex justify-end"
          sx={{
            transform: `translateX(${parentTranslate}%)`,
          }}
        >
          <Box
            component="span"
            sx={{ transform: `translateX(${childTranslate}%)` }}
          >
            {remainingDays === 0
              ? 'Launched'
              : `${remainingDays} days remaining`}
          </Box>
        </Box>
        <LinearProgress
          variant="determinate"
          value={Math.ceil(((totalDays - remainingDays) * 100) / totalDays)}
          color={color}
        />
        <div className="mt-2 flex w-full justify-between text-title-small">
          <span>{`${startDateArray[2]} ${startDateArray[1]} ${startDateArray[3]}`}</span>
          <span>{`${endDateArray[2]} ${endDateArray[1]} ${endDateArray[3]}`}</span>
        </div>
      </div>
    </div>
  );
};
