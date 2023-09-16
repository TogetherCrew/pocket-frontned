'use client';

import { useTheme } from '@mui/material';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

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
} & (
  | { multiple: true; data: Array<MultipleColumnData> }
  | { multiple?: false; data: Array<SingleColumnData> }
);

const StackedBarCharMetric = ({
  title,
  multiple,
  data,
}: StackedBarCharMetric) => {
  const theme = useTheme();

  const dates = data?.map(({ date }) => {
    return date;
  });

  const chartSeriesData = multiple
    ? data.reduce<{ [key: string]: number[] }>((acc, { values }) => {
        return values.reduce((innerAcc, { name, value }) => {
          return { ...innerAcc, [name]: [...(innerAcc[name] || []), value] };
        }, acc);
      }, {})
    : { title: data.map(({ value }) => value) };

  const series: ApexAxisChartSeries = Object.keys(chartSeriesData).map(
    (key) => {
      return {
        name: key,
        data: chartSeriesData[key],
      };
    },
  );

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
        format: 'dd/MM/yy HH:mm',
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
  };

  return (
    <div className="flex h-full w-full flex-col gap-6 rounded-2xl bg-surfaceContainerLow p-5">
      <div className="text-lg font-bold leading-snug">{title}</div>
      <div className="h-full w-full">
        <ApexChart series={series} options={options} height="100%" type="bar" />
      </div>
    </div>
  );
};

export { StackedBarCharMetric };
