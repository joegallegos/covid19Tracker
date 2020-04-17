import React, { useState, useEffect } from 'react';
import { Spinner } from '@blueprintjs/core';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

import styles from './Graph.module.scss';

const API_URL = 'https://covidtracking.com/api/us/daily';

const Graph = () => {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(false);

  const chart = () => {
    let chartDate = [];
    let chartPositive = [];

    setLoading(true);

    axios
      .get(API_URL)
      .then((res) => {
        for (const dataObj of res.data) {
          chartDate.unshift(dataObj.date);
          chartPositive.unshift(dataObj.positive);
        }
        setChartData({
          labels: chartDate,
          datasets: [
            {
              label: 'Positive',
              data: chartPositive,
              backgroundColor: ['rgba(75, 192, 192, 0.6)'],
              borderWidth: 4,
            },
          ],
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className={styles.root}>
      {loading && (
        <div>
          <Spinner className={styles.spinner} intent="primary" />
        </div>
      )}
      <Line
        data={chartData}
        options={{
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  autoSkip: true,
                  beginAtZero: true,
                },
                gridLines: {
                  display: true,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default Graph;
