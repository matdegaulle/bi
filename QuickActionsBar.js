
import React from 'react';

const QuickActionsBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-center space-x-6">
      <button>Add Data Source</button>
      <button>Create Report</button>
      <button>Export</button>
    </div>
  );
};

export default QuickActionsBar;
    