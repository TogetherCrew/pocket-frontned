'use client';
import React from 'react';

import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Adaptability = () => {
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
    colors: ['#FF8022', '#3A9E2B'],
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
    <div className="flex flex-col gap-5">
      <div className="text-xl font-bold">Adaptability</div>
      <div className="flex h-72 w-full flex-col gap-6 rounded-2xl bg-surfaceContainerLow p-5">
        <div className="text-lg font-bold leading-snug">
          Velocity of experiments v no. debated proposals
        </div>
        <div className="h-full w-full">
          <ApexChart
            series={series}
            options={options}
            height="100%"
            type="bar"
          />
        </div>
      </div>
    </div>
  );
};

export { Adaptability };
