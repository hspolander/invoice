import axios from 'axios';

import {
  FETCH_INVOICE_FULFILLED,
  FETCH_INVOICE_REJECTED,
  FETCH_INVOICE,
} from './constants';

export const loadInvoice = id => dispatch => {
  dispatch({ type: FETCH_INVOICE });
  axios
    .get(`/api/invoice/${id}`)
    .then(response => {
      dispatch({ type: FETCH_INVOICE_FULFILLED, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_INVOICE_REJECTED, payload: err });
    });
};
