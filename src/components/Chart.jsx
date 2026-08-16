import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function Chart({ totals }) {
  const categories = Object.keys(totals);

  if (categories.length === 0) {
    return (
      <div className="soft-card chart-placeholder">
        <div>
          <div className="fs-1 mb-2">◌</div>
          <h2 className="h5 fw-bold">Your impact will appear here</h2>
          <p className="muted mb-0">Add a recycling record to build your first chart.</p>
        </div>
      </div>
    );
  }

  const data = {
    labels: categories,
    datasets: [{
      label: "Items recycled",
      data: categories.map((category) => totals[category]),
      backgroundColor: "#5d9270",
      borderRadius: 10,
      maxBarThickness: 58
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: { beginAtZero: true, ticks: { precision: 0 } },
      x: { grid: { display: false } }
    }
  };

  return (
    <div className="soft-card p-4">
      <div className="mb-3">
        <span className="eyebrow">Your impact</span>
        <h2 className="h4 fw-bold mb-0">Recycling by category</h2>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default Chart;
