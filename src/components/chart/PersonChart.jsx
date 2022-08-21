import { useRef, useEffect, useState } from "preact/hooks";
import { buildPersonChart, getPersonChartDatasets } from "./personChartHelper";

const PersonChart = ({ statistics }) => {
  const canvasRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (chart) {
      chart.destroy();
    }

    const datasets = getPersonChartDatasets(statistics.messagesPerPerson);
    const personChart = buildPersonChart(canvasRef.current, datasets);
    setChart(personChart);
  }, []);

  return (
    <div style="position: relative; width:30vw">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default PersonChart;
