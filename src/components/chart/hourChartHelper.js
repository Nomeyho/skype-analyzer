import Chart from "chart.js/auto";

export const getHourChartDatasets = (messagesPerHour) =>
  Object.values(messagesPerHour).map((messagePerHour) => {
    return {
      data: Object.entries(messagePerHour).map(([key, value]) => ({
        x: key,
        y: value,
      })),
      borderColor: "#3e95cd",
      fill: "origin",
      pointRadius: 0,
    };
  });

export const buildHourChart = (canvas, datasets) => {
  return new Chart(canvas, {
    type: "bar",
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
