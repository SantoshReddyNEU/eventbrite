import './App.css';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import './css/Navbar.css';
import './css/Overview.css';
import './css/Filter.css';
import './css/Events.css';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Overview />
      <Filter />
      <Events />
    </div>
  );
}

export default App;
