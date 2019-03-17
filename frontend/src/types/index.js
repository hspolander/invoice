import { shape, number, string, arrayOf, oneOfType } from 'prop-types';

const senderObj = shape({
  name: string,
  street: string,
  city: string,
  postalcode: string,
});

const receiverObj = shape({
  name: string,
  street: string,
  city: string,
  postalcode: string,
});

const titleObj = shape({
  colName: string,
  coltitle: string,
  colSize: string,
});

export const lineObj = shape({
  qty: oneOfType([string, number]),
  description: string,
  vat: number,
  price: number,
});

export const invoiceObj = shape({
  invoiceId: number,
  sender: senderObj.isRequired,
  receiver: receiverObj.isRequired,
  invoiceDate: string,
  payBy: string,
  lines: arrayOf(lineObj).isRequired,
  totalPrice: number,
  account: string,
});

export const titlesListObj = arrayOf(titleObj);
