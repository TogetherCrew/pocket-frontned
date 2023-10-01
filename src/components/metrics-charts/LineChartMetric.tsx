'use client';

import { useTheme } from '@mui/material';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

import { DisabledTimePeriod } from '@/components/disabled-time-period';
import { ChartError } from '@/components/errors';
import { ChartSkeleton } from '@/components/skeletons';
import { PlusJakarta } from '@/font';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export const generateData = (
  length: number,
  max: number = 100,
): LineChartMetricData => {
  const data: LineChartMetricData = [];
  const date = new Date();
  let prevY = Math.floor(Math.random() * max);

  for (let i = 0; i < length; i++) {
    let y = Math.floor(Math.random() * max);

    while (Math.abs(y - prevY) > max / 10) {
      y = Math.floor(Math.random() * max);
    }

    data.push({
      date: date.toISOString(),
      value: y,
    });
    prevY = y;
    date.setHours(date.getHours() + 1);
  }

  return data;
};

type LineChartMetricData = Array<{
  date: string;
  value: number;
}>;

interface LineChartMetricProps {
  title: string;
  data?: LineChartMetricData;
  color?: 'primary' | 'secondary';
  showDisabledTimePeriod?: boolean;
  disabledTimePeriodText?: string;
  description?: string;
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
}

const LineChartMetric = ({
  title,
  data,
  color = 'primary',
  showDisabledTimePeriod = false,
  disabledTimePeriodText,
  description = '',
  isLoading,
  isError,
  errorMessage,
}: LineChartMetricProps) => {
  const theme = useTheme();
  const series: ApexAxisChartSeries = [
    {
      name: title,
      data: data
        ? data.map(({ date, value }) => {
            return { x: date, y: value };
          })
        : [],
    },
  ];
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
        autoSelected: 'selection',
        tools: {
          selection: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: [theme.palette[color].main],
    tooltip: {
      x: {
        format: 'dd/MM/yyyy',
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    xaxis: {
      type: 'datetime',
    },
    noData: {
      text: 'No Data',
      style: {
        fontFamily: PlusJakarta.style.fontFamily,
      },
    },
  };

  return (
    <div className="flex h-72 w-full flex-col gap-6 rounded-2xl bg-surfaceContainerLow p-5">
      <div className="flex flex-row justify-between">
        <div className="text-title-small sm:text-title-semi-large">
          <p className="m-0">{title}</p>
          {description ? (
            <p className="m-0 mt-1 text-body-medium text-onSurfaceVariant">
              {description}
            </p>
          ) : null}
        </div>
        {showDisabledTimePeriod ? (
          <DisabledTimePeriod>{disabledTimePeriodText}</DisabledTimePeriod>
        ) : null}
      </div>
      <div className="h-full w-full">
        {isLoading ? (
          <ChartSkeleton />
        ) : isError ? (
          <ChartError message={errorMessage} />
        ) : data ? (
          <ApexChart
            series={series}
            options={options}
            height="100%"
            type="area"
          />
        ) : null}
      </div>
    </div>
  );
};

export { LineChartMetric };
