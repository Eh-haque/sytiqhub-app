import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const RightArrow = props => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
    <Path
      d="M42 24H6m24-12 12 12-12 12"
      stroke="#000"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default RightArrow;
