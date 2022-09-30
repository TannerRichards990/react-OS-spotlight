import { VictoryChart, VictoryBar, VictoryAxis } from 'victory';

const data = [
  { Model: 'Audi-R8', 'Horsepower (hp)': 610 },
  { Model: 'BMW-M3', 'Horsepower (hp)': 425 },
  { Model: 'Ferrari-488', 'Horsepower (hp)': 661 },
  { Model: 'Lamborghini-Aventador', 'Horsepower (hp)': 740 },
  { Model: 'Porsche-911', 'Horsepower (hp)': 500 },
];

export default function BarChart() {
  return (
    <VictoryChart domainPadding={20}>
      <VictoryAxis
        tickValues={[1, 2, 3, 4, 5]}
        tickFormat={['Audi-R8', 'BMW-M3', 'Ferrari-488', 'Lamborghini-Aventador', 'Porsche-911']}
      />
      <VictoryAxis dependentAxis />
      <VictoryBar data={data} x="Model" y="Horsepower (hp)" />
    </VictoryChart>
  );
}