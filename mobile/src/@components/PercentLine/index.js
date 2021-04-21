import React from 'react';

import {Line, PercentText} from './styles';

const PercentLine = ({percent}) => {
  return (
    <Line width={percent}>
      <PercentText style={{textAlign: 'center'}}>{percent}%</PercentText>
    </Line>
  );
};

export default PercentLine;
