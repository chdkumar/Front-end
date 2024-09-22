import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const BarGraph = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [error, setError] = useState(null); // To capture errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await axios.get("http://localhost:8080/api/orders");
        const data = response.data;

        // Debugging: Log API response
        console.log("API response data:", data);

        // Check if data exists and is an array before mapping
        if (Array.isArray(data)) {
          // Extracting the createdAt date as labels and totalPrice as data for the chart
          const labels = data.map((order) =>
            new Date(order.createdAt).toLocaleDateString()
          ); // Convert to readable date format
          const totalSales = data.map((order) => order.totalPrice); // Extract totalPrice

          // Debugging: Log the extracted labels and totalSales
          console.log("Labels (Dates):", labels);
          console.log("Total Sales:", totalSales);

          // Set the chart data
          setChartData({
            labels: labels,
            datasets: [
              {
                label: "Total Sales",
                data: totalSales,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 1,
              },
            ],
          });
        } else {
          // Debugging: Log if the data is not in the expected format
          console.error("Data is not an array:", data);
          setError("Data format is incorrect");
        }
      } catch (error) {
        // Handle and log errors in fetching the data
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Sales Bar Chart</h2>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <Bar data={chartData} />
      )}
    </div>
  );
};

export default BarGraph;
