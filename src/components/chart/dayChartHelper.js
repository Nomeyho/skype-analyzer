import Chart from "chart.js/auto";

export const getDayChartDatasets = (messagesPerDay) => [
  {
    data: Object.entries(messagesPerDay).map(([key, value]) => ({
      x: key,
      y: value,
    })),
    borderColor: "#3e95cd",
    fill: "origin",
    pointRadius: 0,
  },
];

export const buildDayChart = (canvas, datasets) => {
  return new Chart(canvas, {
    type: "line",
    data: {
      datasets,
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
};
