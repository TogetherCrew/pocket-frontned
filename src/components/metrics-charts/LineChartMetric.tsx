'use client';

import { ReactNode, useMemo } from 'react';

import { useTheme } from '@mui/material';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

import { DisabledTimePeriod } from '@/components/disabled-time-period';
import { ChartError } from '@/components/errors';
import { ChartSkeleton } from '@/components/skeletons';
import { PlusJakarta } from '@/font';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

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
  description?: string | ReactNode;
  prefix?: string | ReactNode;
  postfix?: string | ReactNode;
  toLocalFormat?: boolean;
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
  percentDate?: boolean;
  xAxisLabelFormat?: string;
  yAxisAutomatedMax?: boolean;
}

const LineChartMetric = ({
  title,
  data,
  color = 'primary',
  showDisabledTimePeriod = false,
  disabledTimePeriodText,
  description = '',
  prefix = '',
  postfix = '',
  toLocalFormat = true,
  isLoading,
  isError,
  errorMessage,
  percentDate = false,
  xAxisLabelFormat,
  yAxisAutomatedMax,
}: LineChartMetricProps) => {
  const theme = useTheme();
  const series: ApexAxisChartSeries = [
    {
      name: title,
      data: data
        ? data.map(({ date, value }) => {
            return { x: date, y: percentDate ? value * 100 : value };
          })
        : [],
    },
  ];

  // set Min and Max date for single data
  const minMaxDate = useMemo(() => {
    if (data) {
      const dateStr = data[0]?.date;

      if (dateStr) {
        const minDate = new Date(dateStr);
        const maxDate = new Date(dateStr);

        // Reduce one month
        minDate.setMonth(minDate.getMonth() - 1);
        maxDate.setMonth(maxDate.getMonth() + 1);

        // Convert to timestamp
        return {
          minDate: minDate.getTime(),
          maxDate: maxDate.getTime(),
        };
      }
    }
  }, [data]);

  const isSingleData = data?.length === 1;

  const maxValue = useMemo(() => {
    const values = data?.map(({ value }) => value) || [];
    const max = Math.max(...values);

    return percentDate ? max * 100 : max;
  }, [data, percentDate]);

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
        format: 'yyyy/MM/dd',
      },
      y: {
        formatter: (val: number): string => {
          let result = val.toString();

          const [intSec, floatSec] = (result || '').split('.');

          if (floatSec) {
            const firstNonZeroIndex = floatSec?.search(/[1-9]/);
            const leadingZeros = floatSec?.slice(0, firstNonZeroIndex);
            const remainingNumbers = floatSec?.slice(
              firstNonZeroIndex,
              firstNonZeroIndex + (!firstNonZeroIndex ? 2 : 1),
            );

            result = intSec + '.' + leadingZeros + remainingNumbers;
          }

          if (val > 1e9) {
            result = parseFloat(result).toPrecision(4);
          } else if (val >= 0 && val < 1e-9) {
            result = '0';
          }

          if (toLocalFormat) {
            result = parseFloat(result).toLocaleString('en-US');
          }

          return prefix + result + postfix;
        },
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    ...(isSingleData && {
      markers: {
        size: 5,
        hover: {
          size: 9,
        },
        showNullDataPoints: false,
      },
    }),
    xaxis: {
      type: 'datetime',
      tickPlacement: 'between',
      ...(isSingleData &&
        minMaxDate && {
          min: minMaxDate.minDate,
          max: minMaxDate.maxDate,
        }),
      ...(xAxisLabelFormat && {
        labels: {
          format: xAxisLabelFormat,
          showDuplicates: false,
          // hideOverlappingLabels: true,
        },
      }),
    },
    yaxis: {
      labels: {
        formatter: (val: number): string | string[] => {
          let result = val.toString();

          const [, floatSec] = (result || '').split('.');

          if (floatSec) {
            result = val.toFixed(0);
          }

          if (val > 1e9) {
            result = parseFloat(result).toPrecision(4);
          } else if (val >= 0 && val < 1e-9) {
            result = '0';
          }

          if (toLocalFormat) {
            result = parseFloat(result).toLocaleString('en-US');
          }

          return prefix + result + postfix;
        },
      },
      ...(yAxisAutomatedMax && {
        max: maxValue + 3,
        min: 0,
      }),
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
            <p className="m-0 mt-1 text-body-medium italic text-onSurfaceVariant">
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
