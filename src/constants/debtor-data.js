import React from 'react';
import ClockIcon from '../assets/images/svg/clock.svg';
import ExplosionIcon from '../assets/images/svg/explosion.svg';
import GuardIcon from '../assets/images/svg/guard.svg';
import PatientIcon from '../assets/images/svg/patient.svg';
import UserIcon from '../assets/images/svg/user.svg';
import WheelIcon from '../assets/images/svg/wheel.svg';
import WheelChairIcon from '../assets/images/svg/wheelchair_filled.svg';

export const DEBTORS = [
  {
    name: 'LAMal',
    icon: <PatientIcon />,
  },
  {
    name: 'LAA',
    icon: <ExplosionIcon />,
  },
  {
    name: 'LAI',
    icon: <WheelChairIcon />,
  },
  {
    name: 'LAM',
    icon: <GuardIcon />,
  },
  {
    name: 'LCA',
    icon: <WheelIcon />,
  },
  {
    name: 'Patient',
    icon: <PatientIcon />,
  },
  {
    name: 'Other',
    icon: <UserIcon />,
  },
  {
    name: 'On-Hold',
    icon: <ClockIcon />,
  },
];
