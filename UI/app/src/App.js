import logo from './logo.svg';
import './App.css';
import Sidenav from './components/Sidenav';
import Line from './components/Line';
import Pie from './components/Pie';
import Table from './components/Table';
import Profile from './components/Profile';
import User from './components/User';
import Pages from './components/Pages';

function Home() {
  return (
    <div className='main pe-4'>
      <div className='row'>
        <Profile />
      </div>
      <div className='row' id='content'>
        <div className='card col-lg-7'>
          <Line />
        </div>
        <div className='card col-6 col-lg-2'>
          <Pie />
        </div>
        <div className='card col-lg-8 p-0'>
          <Table />
        </div>
        <div className='card col-3 col-lg-3 p-0' id='userDiv'>
          <User />
        </div>
        <div className='col-12 col-lg-7 d-flex mx-auto' id='pageIndicators'>
          <Pages />
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Home />
    </div>
  );
}

export default App;
