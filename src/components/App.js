import React from 'react';

import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import './App.css';

const App = () => {
  const imagePath = process.env.PUBLIC_URL + '/img/photo_car.jpg';

  return (
    <div className="resume_wrapper">
      <LeftSide avatar={imagePath} />
      <RightSide />
    </div>
  );
};

export default App;
