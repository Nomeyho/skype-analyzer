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
    <div style="position: relative; width:50vw">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default HourChart;
