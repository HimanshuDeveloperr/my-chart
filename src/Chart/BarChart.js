import React from 'react'
import {Chart as ChartJS,BarElement, CategoryScale, LinearScale} from "chart.js"
import {Bar} from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)
// const labels = Utils.months({count: 7});
const data ={labels: ["January", "February", "March", "April", "May"],
datasets: [
  {
    label: "Sales",
    data: [10, 20, 30, 40, 50],
    backgroundColor: [
      "rgba(255, 99, 132, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(255, 206, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(153, 102, 255, 0.2)",
    ],
    borderColor: [
      "rgba(255, 99, 132, 1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)",
      "rgba(75, 192, 192, 1)",
      "rgba(153, 102, 255, 1)",
    ],
    borderWidth: 1,
  },
],
};

var options= {
    maintainAspectRatio:false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    legend:{
        fontSize:26
    }
  }

const BarChart = () => {
  return (
    <div>
        <Bar
        data={data}
        options={options}
        height={400}
        />
    </div>
  )
}

export default BarChart