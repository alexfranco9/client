import './App.css';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';
import OneProduct from './views/OneProduct';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <OneProduct path="/product/1" />
        <Update path="/product/update/1" />
      </Router>
    </div>
  );
}

export default App;
