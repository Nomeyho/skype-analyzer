import { useRef, useEffect, useState } from "preact/hooks";
import Chart from "chart.js/auto";

const HourChart = ({ statistics }) => {
  const canvasRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (chart) {
        chart.destroy();
    }

    const barChart = new Chart(canvasRef.current, {
        type: "bar",
        data: {
          datasets: Object.values(statistics.messagesPerHour).map(messagePerHour => {

            return {
              data: Object.entries(messagePerHour).map(
                ([key, value]) => ({ x: key, y: value })
              ),
              borderColor: "#3e95cd",
              fill: "origin",
              pointRadius: 0,
            }

          })
          ,
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
      setChart(barChart);
    }, []);

  return (
    <div style="position: relative; width:50vw">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default HourChart;
