import Chart from "chart.js/auto";

const HOURS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

export const getHourChartDatasets = (messagesPerHour) =>
  Object.entries(messagesPerHour).map(([participant, messagePerHour], index) => {
    return {
      label: participant,
      data: HOURS.map(hour => messagePerHour[hour] || 0),
      fill: "origin",
      pointRadius: 0,
      backgroundColor: index % 2 == 0 ? "rgba(2, 132, 199, 1)" : "rgba(2, 132, 199, 0.7)",
    };
  });

export const buildHourChart = (canvas, datasets) => {
  return new Chart(canvas, {
    type: "bar",
    data: {
      labels: HOURS.map(hour => hour + 'h'),
      datasets,
    },
    options: {
      responsive: true,
      borderWidth: 1,
      plugins: {
        legend: {
          display: true,
        },
        tooltip: {
          displayColors: false,
          callbacks: {
            label: (tooltip) => tooltip.formattedValue + " messages",
          },
        },
      },
      hover: {
        display: false,
      },
      scales: {},
    },
  });
};
