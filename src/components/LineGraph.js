// src/components/LineChart.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const LineGraph = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/orders');
        const data = response.data;
        console.log(data);

        const labels = data.map(order => order.Id); // Using order id as labels
        const totalSales = data.map(order => order.totalsales); // Assuming each order has a total_sales field
        console.log(labels, totalSales);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Total Sales',
              data: {totalSales},
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Sales Line Charts </h2>
      <Line data={chartData} />
    </div>

  );
};

export default LineGraph;
