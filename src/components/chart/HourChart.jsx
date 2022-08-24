import { useRef, useEffect, useState } from "preact/hooks";
import { getHourChartDatasets, buildHourChart } from "./hourChartHelper";

const HourChart = ({ statistics }) => {
  const canvasRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (chart) {
      chart.destroy();
    }

    const datasets = getHourChartDatasets(statistics.messagesPerHour);
    const hourChart = buildHourChart(canvasRef.current, datasets);
    setChart(hourChart);
  }, []);

  return (
    <div className="mx-8 my-8 max-w-3xl">
      <h1 className="text-3xl tracking-tight font-bold text-gray-800 mb-2">
        Hour chart
      </h1>
      <hr />
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default HourChart;
