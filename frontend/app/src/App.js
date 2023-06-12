
import 'jquery/dist/jquery.min.js'
import './resources/index.css';
import Table from './components/Table';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header className="header"></Header>
      <div className='table'>
        <Table className=""></Table>
      </div>
    </div>
  );
}

export default App;