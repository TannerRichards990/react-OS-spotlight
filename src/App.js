import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import CarTable from './components/Table/CarTable';
import BarChart from './components/Charts/BarChart';

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <Link to="/table" className='items'>Table</Link>
        <Link to="/charts" className='items'>Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Libary</h1>
          <h2>Cars</h2>
          <CarTable />
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
          <h2 className='title is-1'>Horsepower</h2>
          <h3 className='title is-3'>data from <a href='https://CarBuzz.com'/>CarBuzz Metrics</h3>
          <BarChart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
