import './App.css';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';
import OneProduct from './views/OneProduct';
import Update from './views/Update';

function App() {
  return (
    <div>
      <Router>
        <Home path="/" />
        <OneProduct path="/product/:_id" />
        <Update path="/product/update/:_id" />
      </Router>
    </div>
  );
}

export default App;
