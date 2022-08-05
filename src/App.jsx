import { ChartProvider } from './contexts/Chart';

import Home from './pages/Home';

import GlobalStyles from './styles/global';

export default function App() {
  return (
    <ChartProvider>
      <div className="App">
        <Home />
      </div>

      <GlobalStyles />
    </ChartProvider>
  );
}
