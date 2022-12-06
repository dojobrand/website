import './App.css';

import Product from './components/product/Product';
import Header from './components/Header';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import ListComplete from './components/ListComplete';

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop/>
        <Header />
        <Routes>
          <Route path="/:tag" element={<Home />} />
          <Route path="/product/:sku" element={<Product />} />
          <Route path="*" element={<ErrorPage />}/>
          <Route path="/list-complete" element={<ListComplete />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
