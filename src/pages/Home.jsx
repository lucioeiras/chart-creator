import { useState } from 'react';
import { ArrowsOut, ArrowsIn } from 'phosphor-react';

import Chart from '../components/Chart'; 
import Form from '../components/Form';

import { 
  Container,
  ChangeVisualization 
} from '../styles/pages/Home';

export default function Home() {
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <Container isMaximized={isMaximized}>
      <Form />
      <div className="right">
        <Chart isMaximized={isMaximized} />
        <ChangeVisualization onClick={() => setIsMaximized(!isMaximized)}>
          { isMaximized ? <ArrowsIn size={20} /> : <ArrowsOut size={20} /> }
          { isMaximized ? 'Minimizar' : 'Maximizar' }
        </ChangeVisualization>
      </div>
    </Container>
  );
}
