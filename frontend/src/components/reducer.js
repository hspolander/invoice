import _ from 'lodash';
import {
  FETCH_INVOICE_FULFILLED,
  FETCH_INVOICE_REJECTED,
  FETCH_INVOICE,
} from './constants';

const initialState = {
  invoice: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_INVOICE_FULFILLED: {
      return { ...state, invoice: action.payload, };
    }
    case FETCH_INVOICE_REJECTED: {
      return { ...state };
    }
    case FETCH_INVOICE: {
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
}
