import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/lib/less/index.less';
import Cars from '../../Data/cars.json';

export default function CarsTable() {
  return (
    <Table data={Cars}>
      <Column width={200} align="center" fixed>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={200} fixed>
        <HeaderCell>Brand</HeaderCell>
        <Cell dataKey="Brand" />
      </Column>

      <Column width={200}>
        <HeaderCell>Model</HeaderCell>
        <Cell dataKey="Model" />
      </Column>

      <Column width={200}>
        <HeaderCell>Year</HeaderCell>
        <Cell dataKey="Year" />
      </Column>
    </Table>
  );
}