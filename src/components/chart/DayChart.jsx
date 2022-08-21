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
    <div style="position: relative; width:50vw">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default DayChart;
