import { useRef, useEffect, useState } from "preact/hooks";
import Chart from "chart.js/auto";

const DayChart = ({ statistics }) => {
  const canvasRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (chart) {
      chart.destroy();
    }

    const lineChart = new Chart(canvasRef.current, {
      type: "line",
      data: {
        datasets: [
          {
            data: Object.entries(statistics.messagesPerDay).map(
              ([key, value]) => ({ x: key, y: value })
            ),
            borderColor: "#3e95cd",
            fill: "origin",
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: false,
        },
        hover: {
          display: false,
        },
        scales: {},
      },
    });
    setChart(lineChart);
  }, []);

  return (
    <div style="position: relative; width:50vw">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default DayChart;
