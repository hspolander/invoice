import React from 'react';
import { arrayOf } from 'prop-types';

import Line from './line';
import LinePropTitleRow from './linePropTitleRow';
import { lineObj } from '../../../types/index.js';
import './linesTable.scss';

const titlesList = [
  { colName: 'description', colTitle: 'Produkt', colSize: 'big' },
  { colName: 'qty', colTitle: 'Antal', colSize: 'small' },
  { colName: 'price', colTitle: 'Á kr', colSize: 'small' },
  { colName: 'vat', colTitle: 'Moms', colSize: 'small' },
];

const LinesTable = ({ lines }) => (
  <div className="linesTable">
    <LinePropTitleRow titlesList={titlesList} />
    {lines.map((line, index) => (
      <Line
        line={line}
        key={`${index}`}
        className={index != null && index % 2 !== 0 ? 'even' : 'odd'}
        titlesList={titlesList}
      />
    ))}
  </div>
);
LinesTable.propTypes = {
  lines: arrayOf(lineObj),
};

export default LinesTable;
