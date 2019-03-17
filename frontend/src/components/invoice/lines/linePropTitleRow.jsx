import React from 'react';

import LinePropTitleCell from './linePropTitleCell';
import './linePropTitleRow.scss';

import { titlesListObj } from '../../../types/index.js';

const LinePropTitleRow = ({ titlesList }) => (
  <div className="linePropTitleRow">
    {titlesList.map((title, index) => (
      <LinePropTitleCell
        identifier={title.colName}
        key={index}
        size={title.colSize}
        value={title.colTitle}
      />
    ))}
  </div>
);

LinePropTitleRow.propTypes = {
  titlesList: titlesListObj,
};

export default LinePropTitleRow;
