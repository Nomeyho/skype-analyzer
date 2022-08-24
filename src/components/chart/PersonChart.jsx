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
    <div className="mx-8 my-8 max-w-3xl">
      <h1 className="text-3xl tracking-tight font-bold text-gray-800 mb-2">
        Person chart
      </h1>
      <hr />
      <div className="w-96">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default PersonChart;
