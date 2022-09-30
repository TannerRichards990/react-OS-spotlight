import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';
import cars from '../../data/cars.json';

export default function CarsTable() {
  return (
    <Table data={cars}>
      <Column width={200} fixed>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={200} align='left' fixed>
        <HeaderCell>Brand</HeaderCell>
        <Cell dataKey="Brand" />
      </Column>

      <Column width={200} align='center' fixed>
        <HeaderCell>Model</HeaderCell>
        <Cell dataKey="Model" />
      </Column>

      <Column width={200} align='right' fixed>
        <HeaderCell>Year</HeaderCell>
        <Cell dataKey="Year" />
      </Column>
    </Table>
  );
}