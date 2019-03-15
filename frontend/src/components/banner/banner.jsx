import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './banner.scss';

const Banner = ({ title }) => {
  return (
    <div className="banner">
      <span>{title}</span>
    </div>
  );
};
Banner.propTypes = {
  title: PropTypes.string,
};

export default Banner;
