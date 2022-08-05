import { useContext, useState } from 'react';

import { ChartContext } from '../contexts/Chart';

import { Container, TextArea, Button } from '../styles/components/Form';

export default function Form() {
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);
  const [newColors, setNewColors] = useState([]);

  const { setData, setColors } = useContext(ChartContext);

  function changeChart() {
    setData({ x, y });
    setColors(newColors);
  }

  return (
    <Container onSubmit={e => e.preventDefault()}>
      <fieldset>
        <label htmlFor="Y">Y</label>
        <TextArea
          name="Y"
          id="yaxis"
          cols="40"
          rows="6"
          placeholder="0, 0, 0, 0, 0, 0, 0, 0, 0, 0"
          onChange={e => setY(e.target.value.split(','))}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="X">X</label>
        <TextArea
          name="X"
          id="xaxis"
          cols="40"
          rows="6"
          placeholder="0, 0, 0, 0, 0, 0, 0, 0, 0, 0"
          onChange={e => setX(e.target.value.split(','))}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="Colors">Colors</label>
        <TextArea
          name="Colors"
          id="colors"
          cols="40"
          rows="4"
          placeholder="#000000, #000000, #000000, #000000"
          onChange={e => setNewColors(e.target.value.split(','))}
        />
      </fieldset>

      <Button onClick={changeChart}>Gerar gráfico</Button>
    </Container>
  );
}
