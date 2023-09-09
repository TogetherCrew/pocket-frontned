'use client';
import React, { FC } from 'react';

import { useTheme } from '@mui/material';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface StackedBarCharMetric {
  title: string;
  data?: Array<{
    date: string;
    values: [
      {
        name: string;
        value: number;
      },
    ];
  }>;
}

// TODO: extract series (e.g. name, data) and options (e.g. categories) needed values from data
const StackedBarCharMetric: FC<StackedBarCharMetric> = ({ title }) => {
  const theme = useTheme();
  const series: ApexAxisChartSeries = [
    {
      name: 'Velocity of experiments',
      data: [44, 55, 41, 67, 22, 43, 30],
    },
    {
      name: 'no. debated proposals',
      data: [13, 23, 20, 8, 13, 27, 21],
    },
  ];
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
    colors: [theme.palette['orange'].main, theme.palette['green'].main],
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
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-20T00:00:00.000Z',
        '2018-09-21T00:00:00.000Z',
        '2018-09-22T00:00:00.000Z',
        '2018-09-23T00:00:00.000Z',
        '2018-09-24T00:00:00.000Z',
        '2018-09-25T00:00:00.000Z',
      ],
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

export default StackedBarCharMetric;
