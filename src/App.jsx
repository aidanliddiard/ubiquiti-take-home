import { Route, Switch } from 'react-router-dom';
import ProductList from './views/ProductList.js';
import ProductDetail from './views/ProductDetail.js';
import Header from './components/Header.js';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/:productName">
          <ProductDetail />
        </Route>
        <Route path="/">
          <ProductList />
        </Route>
      </Switch>
    </div>
  );
}
