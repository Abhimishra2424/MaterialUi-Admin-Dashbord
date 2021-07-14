import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export const DisplayCradGraph = ({ id, data, brColor, bgColor }) => {
  var ctx = document.getElementById(id).getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: "myChart",
      datasets: [
        {
          label: id,
          data: data,
          borderColor: brColor,
          backgroundColor: bgColor,
          tension: 0.5,
          fill: true,
        },
      ],
    },
    options: {
      scales: {
        x: {
          display: false,
          title: {
            display: false,
          },
        },
        y: {
          display: false,
          title: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });

  return myChart;
};

export const GeneralGraphComponent = ({ id, type, datasets, xAxisLabels }) => {
  var ctx = document.getElementById(id).getContext("2d");
  var myChart = new Chart(ctx, {
    type: type ? type : "line",
    data: {
      labels: xAxisLabels,
      datasets: datasets,
    },
    options: {
      // scales: {
      //   x: {
      //     display: false,
      //     title: {
      //       display: false,
      //     },
      //   },
      //   y: {
      //     display: false,
      //     title: {
      //       display: false,
      //     },
      //   },
      // },
      plugins: {
        legend: {
          position: "bottom",
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });

  return myChart;
};
