import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ProgressCircle = ({ progress }) => {
  const data = {
    datasets: [
      {
        data: [progress, 100 - progress],
        backgroundColor: ['#36A2EB', '#E0E0E0'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '80%',
    rotation: -90,
    circumference: 180,
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
  };

  return (
    <div style={{position: 'relative', width: '300px', height: '300px', textAlign:"center", float:'left'}}>
      <span style={{fontSize:"100%", color:"#e0e0e0", }}>Stosunek strzelonych goli do innych zawodników</span>
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: 'absolute',
          top: '180px',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          fontSize:"130%",
        }}
      >
        <span>{`${progress}%`}</span><br/>
        
      </div>
    </div>
  );
};

export default ProgressCircle;