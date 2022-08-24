import { useRef, useEffect, useState } from "preact/hooks";
import { buildDayChart, getDayChartDatasets } from "./dayChartHelper";

const DayChart = ({ statistics }) => {
  const canvasRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (chart) {
      chart.destroy();
    }
    const datasets = getDayChartDatasets(statistics.messagesPerDay);
    const dayChart = buildDayChart(canvasRef.current, datasets);
    setChart(dayChart);
  }, []);

  return (
    <div className="mx-8 my-8 max-w-3xl">
      <h1 className="text-3xl tracking-tight font-bold text-gray-800 mb-2">
        Day chart
      </h1>
      <hr />
      <canvas className="mt-8" ref={canvasRef}></canvas>
    </div>
  );
};

export default DayChart;
