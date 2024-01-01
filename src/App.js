import logo from './logo.svg';
import './App.css';
import FlightList from './components/FlightList';

function App() {
  return (
    <div className="App px-5 py-5 flex flex-col items-start gap-5">
      <h1 className='text-white font-bold text-3xl font-display'>Expert Server Flights</h1>
      <FlightList/>
    </div>
  );
}

export default App;
