
import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between p-4 shadow-lg">
      <div className="text-lg font-bold">Business Intelligence</div>
      <div className="flex space-x-4">
        <button>🔔</button>
        <button>⚙️</button>
        <button>👤</button>
      </div>
    </header>
  );
};

export default Header;
    