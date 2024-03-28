
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

// import React, { useEffect, useState } from 'react';
// import { getStoredRead } from '../Utility/localstorage';
import { useLoaderData } from 'react-router-dom';

const PagesToRead = () => {

const getReads = useLoaderData();
// const [putStoredRead, setPutStoredRead] = useState([]);

// useEffect(() => {
//   const getReads = getStoredRead();
//   setPutStoredRead(getReads);
//   // console.log(getReads);
// }, []);

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (getReads) => {
  const { fill, x, y, width, height } = getReads;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

  return (
    <div style={{ width: "100%", height: "80vh" }}>
        <BarChart
            width={900}
            height={400}
              data={getReads}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="bookName" />
              <YAxis dataKey={'totalPages'} />
              <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {getReads.map((entry, bookId) => (
                  <Cell key={`cell-${bookId}`} fill={colors[bookId % 20]} />
                ))}
              </Bar>
            </BarChart>
    </div>
   
  );

};

export default PagesToRead;