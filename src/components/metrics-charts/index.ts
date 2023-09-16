import {
  LineChartMetric,
  generateData,
} from '@/components/metrics-charts/LineChartMetric';
import {
  StackedBarCharMetric,
  MultipleColumnData,
} from '@/components/metrics-charts/StackedBarCharMetric';

export const generateMultipleData = (
  length: number,
  count: number,
): Array<MultipleColumnData> => {
  const data: Array<MultipleColumnData> = [];
  // Generate names for the value array
  const names = Array.from({ length: count }, (_, i) =>
    String.fromCharCode(65 + i),
  );

  const date = new Date();

  for (let i = 0; i < length; i++) {
    // Generate the value array
    const values = names.map((name) => ({
      name,
      value: Math.floor(Math.random() * 100), // random value between 0 and 100
    }));

    // Add the data point to the data array
    data.push({ date: date.toISOString(), values });
    date.setHours(date.getHours() + 12);
  }

  return data;
};

export { LineChartMetric, StackedBarCharMetric, generateData };
