import React from 'react';
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
  () => import('./Dashboard'),
  { ssr: false },
);

function Dashboard() {
  return (
    <DynamicComponentWithNoSSR />
  );
}

export default Dashboard;
