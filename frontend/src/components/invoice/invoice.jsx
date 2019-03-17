import React from 'react';

import './invoice.scss';

import LinesTable from './lines/linesTable';
import { invoiceObj } from '../../types/index.js';

const Invoice = ({ activeInvoice }) => (
  <div className="invoice">
    <div>
      <LinesTable lines={activeInvoice.lines} />
    </div>
  </div>
);
Invoice.propTypes = {
  activeInvoice: invoiceObj,
};

export default Invoice;
