
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import QuickActionsBar from './components/QuickActionsBar';

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent />
        <QuickActionsBar />
      </div>
    </div>
  );
};

export default App;
    