import { useRef, useEffect, useState } from "preact/hooks";
import Chart from "chart.js/auto";

const PersonChart = ({ statistics }) => {
  const canvasRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (chart) {
        chart.destroy();
    }

    const pieChart = new Chart(canvasRef.current, {
        type: "pie",
        data: {
          // labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
  
          labels: Object.keys(statistics.messagesPerPerson),
          datasets: [
            {
              label: "Population (millions)",
              // backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: Object.values(statistics.messagesPerPerson),
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: "Predicted world population (millions) in 2050",
          },
        },
      });
      setChart(pieChart);
    }, []);

  return (
    <div style="position: relative; width:30vw">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default PersonChart;
