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

export const lineObj = shape({
  qty: oneOfType([string, number]),
  description: string,
  vat: number,
  price: number,
});

export const invoiceObj = shape({
  invoiceId: number,
  sender: senderObj,
  receiver: receiverObj,
  invoiceDate: string,
  payBy: string,
  lines: arrayOf(lineObj),
  totalPrice: number,
  account: string,
});
