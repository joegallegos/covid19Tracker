import React from 'react';
import { Card, Elevation, Icon } from '@blueprintjs/core';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.root}>
      <Card interactive elevation={Elevation.THREE}>
        <h1>Contact me</h1>
        <div className={styles.contactInfo}>
          <span className={styles.contactInfoIcon}>
            <Icon icon="envelope" />
          </span>
          <p>Email address: j.gallegos25u@gmail.com</p>
        </div>
      </Card>
    </div>
  );
};

export default Contact;
