import React, { useEffect, useState } from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import styles from './StatesPage.module.scss';

const API_URL = 'https://api.covidtracking.com/v1/states/current.json';

const StatesPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchItem = await fetch(API_URL);
    const item = await fetchItem.json();

    setData(item);
  };
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {data.map((item) => (
          <div key={item.state}>
            <Card className={styles.card} elevation={Elevation.FOUR}>
              <h1 className={styles.cardHeader}>{item.state}</h1>
              <p>Total Positive: {item.positive}</p>
              <p>Total Death: {item.death}</p>
              <p>Total Tests: {item.totalTestResults}</p>
              <p>Last Updated: {item.lastUpdateEt}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatesPage;
