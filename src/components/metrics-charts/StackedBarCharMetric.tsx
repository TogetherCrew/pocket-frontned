'use client';

import { ReactNode } from 'react';

import { useTheme } from '@mui/material';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

import { ChartError } from '@/components/errors';
import { ChartSkeleton } from '@/components/skeletons';
import { PlusJakarta } from '@/font';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export type SingleColumnData = {
  date: string;
  value: number;
};

export type MultipleColumnData = {
  date: string;
  values: Array<{
    name: string;
    value: number;
  }>;
};

const extractMultipleColumnData = (
  data: Array<MultipleColumnData>,
): Record<string, number[]> => {
  const keys = new Set<string>();

  for (const dataElement of data) {
    const { values } = dataElement;

    for (const value of values) {
      keys.add(value.name);
    }
  }

  const keysArray = Array.from(keys.values());

  const initialData: Record<string, number[]> = keysArray.reduce(
    (acc, key) => ({ ...acc, [key]: [] }),
    {},
  );

  return data.reduce((acc, { values }) => {
    const currentDataMap = new Map();

    for (const key of keysArray) {
      currentDataMap.set(key, 0);
    }

    for (const { name, value } of values) {
      currentDataMap.set(name, value);
    }

    currentDataMap.forEach((value, key) => {
      acc[key] = [...acc[key], value];
    });

    return acc;
  }, initialData);
};

type StackedBarCharMetric = {
  title: string;
  description?: string | ReactNode;
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
  percentDate?: boolean;
  showDecimal?: boolean;
  postfix?: string;
  xAxisLabelFormat?: string;
} & (
  | { multiple: true; data?: Array<MultipleColumnData> }
  | { multiple?: false; data?: Array<SingleColumnData> }
);

const StackedBarCharMetric = ({
  title,
  multiple,
  data,
  description,
  isLoading,
  isError,
  errorMessage,
  percentDate = false,
  postfix = '',
  xAxisLabelFormat,
}: StackedBarCharMetric) => {
  const theme = useTheme();

  const dates = data?.map(({ date }) => {
    return date;
  });

  const chartSeriesData = multiple
    ? extractMultipleColumnData(data || [])
    : { [title]: (data || []).map(({ value }) => value) };

  const series: ApexAxisChartSeries =
    data && chartSeriesData
      ? Object.keys(chartSeriesData).map((key) => {
          const PercentageValue = chartSeriesData[key].map((value) => {
            return percentDate ? value * 100 : value;
          });

          return {
            name: key.replaceAll('_', ' '),
            data: PercentageValue,
          };
        })
      : [];

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      stacked: true,
      ...(percentDate && { stackType: '100%' }),
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
    colors: [
      theme.palette['orange'].main,
      theme.palette['green'].main,
      theme.palette['pink'].main,
    ],
    tooltip: {
      x: {
        format: 'yyyy/MM/dd',
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '300%',
      },
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: dates,
      ...(xAxisLabelFormat && {
        labels: {
          format: xAxisLabelFormat,
        },
      }),
    },
    yaxis: {
      labels: {
        formatter: (val: number): string | string[] => {
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

          return result + postfix;
        },
      },
    },
    fill: {
      opacity: 1,
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
      <div className="text-title-small sm:text-title-semi-large">
        <p className="m-0">{title}</p>
        {description ? (
          <p className="m-0 mt-1 text-body-large italic text-onSurfaceVariant">
            {description}
          </p>
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
            type="bar"
          />
        ) : null}
      </div>
    </div>
  );
};

export { StackedBarCharMetric };
