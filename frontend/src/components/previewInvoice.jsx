import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadInvoice } from './actions';
import { invoiceObj } from '../types/index.js';
import Banner from './banner/banner';
import Invoice from './invoice/invoice';

const PreviewInvoice = ({ activeInvoice, ...props }) => {
  useEffect(() => {
    props.loadInvoice(0);
  }, []);
  return (
    <div>
      <Banner title="Din faktura" />
      {activeInvoice && <Invoice activeInvoice={activeInvoice} />}
    </div>
  );
};
PreviewInvoice.propTypes = {
  activeInvoice: invoiceObj,
  loadInvoice: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  loadInvoice,
};

const mapStateToProps = state => ({
  activeInvoice: state.invoiceReducer.invoice,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PreviewInvoice);
