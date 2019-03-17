import React from 'react';

import InvoiceBlockProp from './invoiceBlockProp';
import InvoiceProp from './invoiceProp';
import InvoiceBlockTitle from './inVoiceBlockTitle';
import LinesTable from './lines/linesTable';
import { invoiceObj } from '../../types/index.js';
import './invoice.scss';

const Invoice = ({ activeInvoice }) => (
  <div className="invoice">
    <InvoiceProp value={activeInvoice.invoiceDate} title="Fakturadatum:" />
    <InvoiceBlockTitle title="Avsändare" />
    <InvoiceBlockProp value={activeInvoice.sender.name} title="Namn:" />
    <InvoiceBlockProp value={activeInvoice.sender.city} title="Stad:" />
    <InvoiceBlockProp
      value={`${activeInvoice.sender.city}, ${activeInvoice.sender.postalcode}`}
      title="Address"
    />
    <InvoiceBlockTitle title="Mottagare" />
    <InvoiceBlockProp value={activeInvoice.receiver.name} title="Namn:" />
    <InvoiceBlockProp value={activeInvoice.receiver.city} title="Stad:" />
    <InvoiceBlockProp
      value={`${activeInvoice.receiver.city}, ${
        activeInvoice.receiver.postalcode
      }`}
      title="Address:"
    />
    <div>
      <LinesTable lines={activeInvoice.lines} />
    </div>
    <InvoiceProp value={`${activeInvoice.totalPrice} kr`} title="Totalt:" />
    <InvoiceProp value={activeInvoice.payBy} title="Betalas senast:" />
    <InvoiceProp value={activeInvoice.account} title="Konto:" />
  </div>
);
Invoice.propTypes = {
  activeInvoice: invoiceObj,
};

export default Invoice;
