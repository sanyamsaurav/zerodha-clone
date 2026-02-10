import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Outlet /> {/* This renders the child routes */}
    </div>
  );
};

export default App;
