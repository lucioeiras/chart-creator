import { createContext, useState } from 'react';

export const ChartContext = createContext();

export function ChartProvider({ children }) {
  const [data, setData] = useState({ x: [1, 2, 3], y: [2, 6, 3] });
  const [colors, setColors] = useState([]);

  return (
    <ChartContext.Provider value={{ data, colors, setData, setColors }}>
      { children }
    </ChartContext.Provider>
  );
}
