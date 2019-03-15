import React from 'react';

import './line.scss';

import { lineObj } from '../../types/index.js';

const Line = ({ line }) => {
  return (
    <div className="line">
    </div>
  );
};
Line.propTypes = {
  line: lineObj,
};

export default Line;
