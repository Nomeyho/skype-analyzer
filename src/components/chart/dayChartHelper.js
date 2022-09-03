import Chart from "chart.js/auto";

export const getDayChartDatasets = (messagesPerDay) => [
  {
    data: Object.entries(messagesPerDay).map(([key, value]) => ({
      x: key,
      y: value,
    })),
  
  },
];

export const buildDayChart = (canvas, datasets) => {
  return new Chart(canvas, {
    type: "line",
    data: {
      datasets,
    },
    options: {
      pointRadius: 0,
      borderColor: 'rgb(2, 132, 199)',
      fill: true,
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
      scales: {
        y: {
          title: {
            display: true,
            text: "Number of messages",
          },
        },
        x: {
          ticks: {
            callback: function (val, index) {
              return index % 10 == 0
                ? new Date(this.getLabelForValue(val)).toLocaleDateString()
                : undefined;
            },
          },
        },
      },
    },
  });
};
