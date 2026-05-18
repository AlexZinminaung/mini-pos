import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

const labels = ['Butter 250g', 'Eggs (10 pcs)', 'Shampoo', 'Dish Soap', 'Chang Beer'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Best Selling Product',
      data: [4300, 3400, 3000, 2900, 2200],
      borderColor: '#14B8A6',
      backgroundColor: 'rgba(20, 184, 166, 0.08)',
    }
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
}


export default BarChart;