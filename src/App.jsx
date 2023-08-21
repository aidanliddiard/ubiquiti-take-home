import { Route, Switch } from 'react-router-dom';
import ProductList from './views/ProductList.js';
import ProductDetail from './views/ProductDetail.js';

export default function App() {
  return (
    <div className="App">
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
