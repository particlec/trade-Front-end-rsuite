import React from 'react';
import { Icon } from '@rsuite/icons';
import { VscTable, VscCalendar } from 'react-icons/vsc';
import { MdFingerprint, MdDashboard, MdModeEditOutline } from 'react-icons/md';
import CubesIcon from '@rsuite/icons/legacy/Cubes';
import ScatterIcon from '@rsuite/icons/Scatter';
import TrendIcon from '@rsuite/icons/Trend';
import ReloadIcon from '@rsuite/icons/Reload';

export const appNavs = [
  {
    eventKey: 'risk-assessment',
    icon:  <ScatterIcon />,
    title: 'risk-assessment',
    to: '/risk-assessment',
    children: [
      {
        eventKey: 'stock-market',
        title: 'stock-market',
        to: '/stock-market'
      },
      {
        eventKey: 'national-debt',
        title: 'national-debt',
        to: '/national-debt'
      }
    ]
  },
  {
    eventKey: 'big-data-training',
    icon:  <TrendIcon />,
    title: 'training',
    to: '/training'
  },
  {
    eventKey: 'strategy-run',
    icon:  <ReloadIcon />,
    title: 'run-strategy',
    to: '/run-strategy'
  },
  {
    eventKey: 'dashboard',
    icon: <Icon as={MdDashboard} />,
    title: 'Dashboard',
    to: '/dashboard'
  },
  {
    eventKey: 'calendar',
    icon: <Icon as={VscCalendar} />,
    title: 'Calendar',
    to: '/calendar'
  },
  {
    eventKey: 'tables',
    icon: <Icon as={VscTable} />,
    title: 'Tables',
    to: '/table-members',
    children: [
      {
        eventKey: 'members',
        title: 'Members',
        to: '/table-members'
      },
      {
        eventKey: 'virtualized',
        title: 'Virtualized Table',
        to: '/table-virtualized'
      }
    ]
  },
  {
    eventKey: 'forms',
    icon: <Icon as={MdModeEditOutline} />,
    title: 'Forms',
    to: '/form-basic',
    children: [
      {
        eventKey: 'form-basic',
        title: 'Basic',
        to: '/form-basic'
      },
      {
        eventKey: 'form-wizard',
        title: 'Wizard',
        to: '/form-wizard'
      }
    ]
  },
  {
    eventKey: 'authentication',
    title: 'Authentication',
    icon: <Icon as={MdFingerprint} />,
    children: [
      {
        eventKey: 'sign-in',
        title: 'Sign In',
        to: '/sign-in'
      },

      {
        eventKey: 'sign-up',
        title: 'Sign Up',
        to: '/sign-up'
      },

      {
        eventKey: 'error400',
        title: 'Error 404',
        to: '/error-404'
      },
      {
        eventKey: 'error500',
        title: 'Error 500',
        to: '/error-500'
      }
    ]
  },

  {
    eventKey: 'components',
    title: 'Components',
    icon: <CubesIcon />,
    href: 'https://rsuitejs.com/components/overview/',
    target: '_blank'
  }
];
