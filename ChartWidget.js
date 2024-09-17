
import React from 'react';
import { LineChart, BarChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [{name: 'Jan', value: 100}, {name: 'Feb', value: 200}];

const ChartWidget = ({ type, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-full lg:w-2/3">
      <h3 className="font-bold mb-4">{title}</h3>
      {type === "line" ? (
        <LineChart width={400} height={200} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      ) : (
        <BarChart width={400} height={200} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      )}
    </div>
  );
};

export default ChartWidget;
    