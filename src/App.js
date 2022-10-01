import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import CarTable from './Components/Table/CarTable';
import BarChart from './Components/Chart/BarChart';


function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <Link to="/table" className='nav-items'>Table</Link>
        <Link to="/charts" className='nav-items'>Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1 className='title is 1'>Table Library</h1>
          <h2 className='title is 3'>Cars</h2>
          <CarTable />
        </Route>
        <Route path="/charts">
          <h1 className='title is 1'>Chart Library</h1>
          <h2 className='title is-3'>Horsepower</h2>
          <h3 className='title is-6'>Data from <a href='https://CarBuzz.com'/>CarBuzz Metrics</h3>
          <BarChart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;


//netlify fix