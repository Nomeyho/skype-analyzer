import Chart from "chart.js/auto";

export const getPersonChartDatasets = (messagesPerPerson) => [
  {
    label: "Population (millions)",
    data: Object.values(messagesPerPerson),
  },
];

export const buildPersonChart = (canvas, datasets, labels) => {
  return new Chart(canvas, {
    type: "pie",
    data: {
      labels,
      datasets,
    },
    options: {
      backgroundColor: [
        "rgba(2, 132, 199, 1)",
        "rgba(2, 132, 199, 0.7)",
        "rgba(2, 132, 199, 0.4)",
        "rgba(2, 132, 199, 0.1)",
      ],
      plugins: {
        legend: {
          position: "bottom",
          display: true,
          onClick: (e) => e.native.stopPropagation(),
        },
        tooltip: {
          displayColors: false,
          callbacks: {
            label: (tooltip) => tooltip.formattedValue + " messages",
          },
        },
      },
    },
  });
};
