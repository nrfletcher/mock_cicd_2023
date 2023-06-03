import './resources/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CarInfoSection } from './components/CarInfoSection';
import 'jquery/dist/jquery.min.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <CarInfoSection />
      <CarInfoSection />
      <Footer />
    </div>
  );
}

export default App;