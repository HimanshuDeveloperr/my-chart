import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

const GraphPlotter = () => {
  const [xAxisData, setXAxisData] = useState("");
  const [yAxisData, setYAxisData] = useState("");
  const [chartData, setChartData] = useState({});

  const updateXAxisData = (e) => {
    setXAxisData(e.target.value);
  };

  const updateYAxisData = (e) => {
    setYAxisData(e.target.value);
  };

  const setDatasets = () => {
    const xData = xAxisData.split(",");
    const yData = yAxisData.split(",").map(Number);

    setChartData({
      labels: xData,
      datasets: [
        {
          label: "Graph Plot",
          backgroundColor: "rgba(75,192,192,0.6)",
          borderColor: "rgba(75,192,192,1)",
          data: yData,
        },
      ],
    });
  };

  return (
    <div>
      <div>
        <label htmlFor="x-axis-data">X-Axis Data:</label>
        <input
          type="text"
          id="x-axis-data"
          value={xAxisData}
          onChange={updateXAxisData}
        />
      </div>
      <div>
        <label htmlFor="y-axis-data">Y-Axis Data:</label>
        <input
          type="text"
          id="y-axis-data"
          value={yAxisData}
          onChange={updateYAxisData}
        />
      </div>
      <button onClick={setDatasets}>Plot Graph</button>
      {chartData.labels ? (
        <Bar
          data={chartData}
          options={{
            title: {
              display: true,
              text: "Graph Plot",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      ) : null}
    </div>
  );
};

export default GraphPlotter;
