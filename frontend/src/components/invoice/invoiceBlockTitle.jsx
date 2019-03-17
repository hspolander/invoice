import React from 'react';
import PropTypes from 'prop-types';

import './invoiceBlockTitle.scss';

const InvoiceBlockTitle = ({ title }) => (
  <div className="invoiceBlockTitle">
    <span>{title}</span>
  </div>
);
InvoiceBlockTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default InvoiceBlockTitle;
