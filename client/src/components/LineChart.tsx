import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
);

// 1. Add responsiveness configurations
  const options = {
    responsive: true,
    maintainAspectRatio: false, 
  };

const LineChart = () => {
  const data = {
    labels: ["Tue 12", "Wed 13", "Thu 14", "Fri 15","Sat 16", "Sun 17", "Mon 18"],

    datasets: [
      {
        label: "Sales",
        data: [10, 20, 15, 40, 30, 20, 60],

        borderColor: "#14B8A6",
        backgroundColor: "rgba(20, 184, 166, 0.08)",
        fill: true,
      },
    ],
  };

  return (
    <div className="w-full">
      <Line data={data} options={options}/>
    </div>
  );
};

export default LineChart;