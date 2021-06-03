import React from 'react';
import document from '../media/document.svg';
import { FaCog, FaUserClock, FaServer, FaBatteryEmpty } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
interface Benefit {
  header: string;
  text: string;
  icon: any;
}

const Benefis: React.FC = () => {
  const benefits: Benefit[] = [
    {
      header: 'Take advantage of Technology',
      text: 'Use a smart system to keep track of parcels and manage them',
      icon: <FaCog />,
    },
    {
      header: 'Cut labor costs',
      text: 'Our smart system will save you lots of money spent on unnecessary labor costs',
      icon: <FaUserClock />,
    },
    {
      header: 'Use servers, Not paperwork',
      text: 'No more paperwork, Our cloud servers will keep your workflow and data organized',
      icon: <FaServer />,
    },
  ];
  return (
    <>
      {benefits.map((benefit) => (
        <>
          {benefit.icon}
          <h4>{benefit.header}</h4>
          <p>{benefit.text}</p>
        </>
      ))}
    </>
  );
};

export default Benefis;
