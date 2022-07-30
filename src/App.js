import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Settings from './pages/Settings';
import Questions from './pages/Questions';
import FinalScreen from './pages/FinalScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Settings />} />
        <Route exact path="/questions" element={<Questions />} />
        <Route exact path="/score" element={<FinalScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
