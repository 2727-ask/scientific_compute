// Initilize The Chart
const data = {
  datasets: [
    {
      label: "First Dataset",
      data: [
        {
          x: 0,
          y: 1,
          r: 10
        }
      ],
      backgroundColor: "rgb(255, 99, 132)"
    }
  ]
};

const config = {
  type: "bubble",
  data: data,
  options: {}
};

const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, config);

function updateChart(arr) {
  myChart.data.datasets.forEach((dataset) => {
    dataset.data.pop();
  });
  console.log("Executing");
  arr.forEach((element) => {
    myChart.data.datasets.forEach((dataset) => {
      dataset.data.push(element);
    });
  });
  console.log("Executed");
  myChart.update();
}


