import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2003-02-11T06:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(0));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'study',
    label: 'Study',
    value: 'B.Tech-IT',
  },
  {
    key: 'language',
    label: 'language',
    value: 'Gujarati, Hindi, English, German(A2)',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Surat, GJ',
  },

];

export default data;
