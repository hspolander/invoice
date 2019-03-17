import React from 'react';
import PropTypes from 'prop-types';

import './banner.scss';

const Banner = ({ title }) => (
  <div className="banner">
    <span>{title}</span>
  </div>
);
Banner.propTypes = {
  title: PropTypes.string,
};

export default Banner;
