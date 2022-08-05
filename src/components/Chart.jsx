import { useContext } from 'react';
import Plot from 'react-plotly.js';

import { ChartContext } from '../contexts/Chart';

export default function Chart({ isMaximized }) {
  const { data, colors } = useContext(ChartContext);

  return (
    <div className='chartContainer'>
      <Plot
        data={[
          {
            x: data.x,
            y: data.y,
            type: 'scatter',
            mode: 'lines+markers',
          }
        ]}
        layout={{ 
          width: isMaximized ? 1120 : 600, 
          height: isMaximized ? 560 : 300,
          colorway: colors,
          font: {
            family: 'IBM Plex Sans, sans-serif',
            color: '#718096'
          },
          margin: { b: 0, l: 12, r: 0, t: 0 },
          legend: { orientation: 'h' },
          yaxis: {
            gridcolor: '#EDF2F7',
            zeroline: false,
          },
          xaxis: {
            linecolor: '#CBD5E0',
          }
        }}
      />
    </div>
  )
}