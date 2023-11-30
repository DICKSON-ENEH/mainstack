
"use client"
import React from 'react';
import { LineChart, Line, XAxis,Label, ReferenceLine } from 'recharts';

const data = [{ name: 'Page A', uv: 100, },
{uv: 350, pv: 2400, amt: 2400 },
{ uv: 150, pv: 2400, amt: 2400 },
{  uv: 400, pv: 2400, amt: 2400 },
{ name: 'Page C', uv: 80, pv: 2400, amt: 2400 },
];

const renderLineChart: React.FC = () => (
  <LineChart width={700} height={250} data={data} >
    <Line type="monotone" dataKey="uv" stroke="#FF5403" dot={false} />
  
    {/* <ReferenceLine
      x1="Page A"
      x2="Page A"
      y1={0}
      y2={1}
      stroke="red"
      strokeDasharray="3 3"
    /> */}
  </LineChart>
);

export default renderLineChart;
