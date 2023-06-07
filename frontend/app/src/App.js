
import 'jquery/dist/jquery.min.js'
import Button from '@mui/material/Button'
import LandingPage from './components/LandingPage';
import './resources/index.css';
import DummyText from './components/DummyText';

function App() {
  return (
    <div className="diagonal-split">
      <LandingPage></LandingPage>
    </div>
  );
}

export default App;