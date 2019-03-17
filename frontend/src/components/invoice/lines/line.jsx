import React from 'react';
import PropTypes from 'prop-types';

import LineProp from './lineProp';
import './line.scss';

import { lineObj, titlesListObj } from '../../../types/index.js';

const Line = ({ line, className, titlesList }) => (
  <div className={`${className} line`}>
    {titlesList.map((title, index) => (
      <LineProp value={line[title.colName]} key={index} size={title.colSize} />
    ))}
  </div>
);
Line.propTypes = {
  line: lineObj,
  className: PropTypes.string.isRequired,
  titlesList: titlesListObj,
};

export default Line;
