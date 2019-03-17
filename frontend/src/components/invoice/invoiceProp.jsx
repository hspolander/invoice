import React from 'react';
import PropTypes from 'prop-types';

import './invoiceProp.scss';

const InvoiceProp = ({ title, value }) => (
  <div className="invoiceProp">
    <span className="propTitle">{title}</span>
    <span className="propValue">{value}</span>
  </div>
);
InvoiceProp.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InvoiceProp;
