import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import Graph from '../Graph';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Card className={styles.infoCard} elevation={Elevation.FOUR}>
          <h1 className={styles.headerText}>About Coronavirus (COVID-19)</h1>
          <span>
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html#Coronavirus-Disease-2019-Basics">
              Source
            </a>
          </span>
          <br />
          <br />
          <p>
            A novel coronavirus is a new coronavirus that has not been
            previously identified. The virus causing coronavirus disease 2019
            (COVID-19), is not the same as the coronaviruses that commonly
            circulate among humans and cause mild illness, like the common cold.
          </p>
          <br />
          <p>
            A diagnosis with coronavirus 229E, NL63, OC43, or HKU1 is not the
            same as a COVID-19 diagnosis. Patients with COVID-19 will be
            evaluated and cared for differently than patients with common
            coronavirus diagnosis.
          </p>
        </Card>
        <div className={styles.lineGraph}>
          <Graph />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
