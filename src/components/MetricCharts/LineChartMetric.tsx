'use client';
import React, { FC } from 'react';

import { useTheme } from '@mui/material';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
const generateData = (length: number, max: number = 100) => {
  const data = [];
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

interface LineChartMetricProps {
  title: string;
  data?: Array<{
    date: string;
    value: number;
  }>;
  color?: 'primary' | 'secondary';
}

const LineChartMetric: FC<LineChartMetricProps> = ({
  title,
  data = generateData(50),
  color = 'primary',
}) => {
  const theme = useTheme();
  const series: ApexAxisChartSeries = [
    {
      name: 'pocket network',
      data: data.map(({ date, value }) => {
        return { x: date, y: value };
      }),
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
        format: 'dd/MM/yy HH:mm',
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    xaxis: {
      type: 'datetime',
    },
  };

  return (
    <div className="flex h-full w-full flex-col gap-6 rounded-2xl bg-surfaceContainerLow p-5">
      <div className="text-lg font-bold leading-snug">{title}</div>
      <div className="h-full w-full">
        <ApexChart
          series={series}
          options={options}
          height="100%"
          type="area"
        />
      </div>
    </div>
  );
};

export { LineChartMetric };
