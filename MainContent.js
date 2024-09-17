
import React from 'react';
import DashboardWidget from './DashboardWidget';
import ChartWidget from './ChartWidget';

const MainContent = () => {
  return (
    <div className="p-6 flex flex-wrap gap-4">
      <DashboardWidget title="Revenue" />
      <DashboardWidget title="User Growth" />
      <ChartWidget type="line" title="Monthly Sales" />
      <ChartWidget type="bar" title="Engagement Rate" />
    </div>
  );
};

export default MainContent;
    