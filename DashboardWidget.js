
import React from 'react';

const DashboardWidget = ({ title }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-full sm:w-1/2 lg:w-1/3">
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-3xl">1234</p>
    </div>
  );
};

export default DashboardWidget;
    