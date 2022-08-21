import Chart from "chart.js/auto";

export const getPersonChartDatasets = (messagesPerPerson) => ([
  {
    label: "Population (millions)",
    // backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
    data: Object.values(messagesPerPerson),
  },
])

export const buildPersonChart = (canvas, datasets) => {
  return new Chart(canvas, {
    type: "pie",
    data: {
      // labels: Object.keys(statistics.messagesPerPerson),
      datasets,
    },
    options: {
      title: {
        display: true,
        text: "Predicted world population (millions) in 2050",
      },
    },
  });
};
