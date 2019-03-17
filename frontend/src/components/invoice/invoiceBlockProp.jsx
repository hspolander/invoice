import React from 'react';
import PropTypes from 'prop-types';

import './invoiceBlockProp.scss';

const InvoiceBlockProp = ({ title, value }) => (
  <div className="invoiceBlockProp">
    <span className="propTitle">{title}</span>
    <span className="propValue">{value}</span>
  </div>
);
InvoiceBlockProp.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InvoiceBlockProp;
