import React from 'react';

import Line from './line';
import './invoice.scss';

import { invoiceObj } from '../../types/index.js';

const Invoice = ({ activeInvoice }) => (
  <div className="invoice">
    {activeInvoice.lines.map((line, index) => (
      <Line line={line} key={`${index}`} />
    ))}
    <Line />
  </div>
);
Invoice.propTypes = {
  activeInvoice: invoiceObj,
};

export default Invoice;
