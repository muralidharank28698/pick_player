import logo from './logo.svg';
import './App.css';
import Players from './Components/Players';
import { Provider } from 'react-redux';
import store from './appredux/store';
import { Routes, Route } from 'react-router-dom';
import FilteredPlayer from './Components/FilteredPlayers';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
        <Route path="/" element={<Players />} />
        <Route path="filteredPlayers" element={<FilteredPlayer />} />
      </Routes>
      </div>
    </Provider>
  );
}

export default App;
