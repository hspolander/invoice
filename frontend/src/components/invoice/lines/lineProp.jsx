import React from 'react';
import PropTypes from 'prop-types';

import './lineProp.scss';

const LineProp = ({ value, size }) => (
  <div className={`lineProp ${size}`}>
    {value && (
      <button type="button">
        {value}
      </button>
    )}
  </div>
);
LineProp.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.string.isRequired,
};

export default LineProp;
