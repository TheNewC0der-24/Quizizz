import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Settings from './pages/Settings';
import Questions from './pages/Questions';
import FinalScreen from './pages/FinalScreen';
import { Container } from '@mui/material';
import { Box } from '@mui/system';

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box mt={5}>
          <Routes>
            <Route exact path="/" element={<Settings />} />
            <Route exact path="/questions" element={<Questions />} />
            <Route exact path="/score" element={<FinalScreen />} />
          </Routes>
        </Box>
      </Container>
    </Router >
  );
}

export default App;
