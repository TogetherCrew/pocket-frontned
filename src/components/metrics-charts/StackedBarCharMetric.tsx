'use client';

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

type StackedBarCharMetric = {
  title: string;
  description?: string;
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
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
}: StackedBarCharMetric) => {
  const theme = useTheme();

  const dates = data?.map(({ date }) => {
    return date;
  });

  const chartSeriesData = multiple
    ? (data || []).reduce<Record<string, number[]>>((acc, { values }) => {
        return values.reduce((innerAcc, { name, value }) => {
          return { ...innerAcc, [name]: [...(innerAcc[name] || []), value] };
        }, acc);
      }, {})
    : { [title]: (data || []).map(({ value }) => value) };

  const series: ApexAxisChartSeries =
    data && chartSeriesData
      ? Object.keys(chartSeriesData).map((key) => {
          return {
            name: key.replaceAll('_', ' '),
            data: chartSeriesData[key],
          };
        })
      : [];

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      stacked: true,
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
        format: 'dd/MM/yyyy',
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '25%',
      },
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: dates,
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
          <p className="m-0 mt-1 text-body-medium text-onSurfaceVariant">
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
