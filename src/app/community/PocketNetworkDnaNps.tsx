'use client';
import React from 'react';

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
      x: date.toISOString(),
      y: y,
    });
    prevY = y;
    date.setHours(date.getHours() + 1);
  }

  return data;
};
const PocketNetworkDnaNps = () => {
  const series: ApexAxisChartSeries = [
    {
      name: 'pocket network',
      data: generateData(50),
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
    colors: ['#005EB2'],
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
    <div className="flex w-full flex-col gap-6 rounded-2xl bg-surfaceContainerLow p-5">
      <div className="text-lg font-bold leading-snug">
        Pocket Network DNA NPS
      </div>
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

export { PocketNetworkDnaNps };
