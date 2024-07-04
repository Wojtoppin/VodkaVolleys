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
    <div style={{position: 'relative', width: '150px', height: '150px', textAlign:"center", float:'left', marginLeft:"30px"}}>
      <span style={{fontSize:"80%", color:"#e0e0e0", }}>Stosunek strzelonych goli do innych zawodników</span>
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: 'absolute',
          top: '150px',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <span>{`${progress}%`}</span><br/>
        
      </div>
    </div>
  );
};

export default ProgressCircle;