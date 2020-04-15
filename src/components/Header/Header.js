import React from 'react';
import { Link } from 'react-router-dom';
import {
  Alignment,
  Icon,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div>
      <Navbar className={styles.header}>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>
            <Icon className={styles.headerIcon} icon="virus" />
            <span>Covid-19 Tracker</span>
          </NavbarHeading>
          <NavbarDivider className={styles.navDivider} />
          <div className={styles.links}>
            <Link className={styles.link} to="/">
              Home
            </Link>
            <Link className={styles.link} to="/contact">
              Contact
            </Link>
          </div>
        </NavbarGroup>
      </Navbar>
    </div>
  );
};

export default Header;
