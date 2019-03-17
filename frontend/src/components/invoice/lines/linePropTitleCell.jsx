import React from 'react';
import PropTypes from 'prop-types';

import './linePropTitleCell.scss';

const LinePropTitleCell = ({ value, size }) => (
  <div className={`linePropTitleCell ${size}`}>
    <button type="button">
      <p>{value}</p>
    </button>
  </div>
);
LinePropTitleCell.propTypes = {
  value: PropTypes.string,
  size: PropTypes.string.isRequired,
  identifier: PropTypes.string,
};

export default LinePropTitleCell;
