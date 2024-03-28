import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import CustomAxisTick from './CustomAxisTick';
import TriangleBar from './TriangleBar';
const CustomShapeBarChart = ({ data }) => {
    return (
      <BarChart  data={data}>
        <XAxis dataKey="name" tick={<CustomAxisTick></CustomAxisTick>}></XAxis>
        <YAxis />
        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar></TriangleBar>} />
      </BarChart>
    );
  };

  export default CustomShapeBarChart;