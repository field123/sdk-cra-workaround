import logo from './logo.svg';
import './App.css';
import {gateway} from '@moltin/sdk'
import { useEffect, useState } from 'react';

const EPCC = gateway({
  client_id: 'KkAszgYPkfqZ7ZTLIcPJOSO4n9fxEJB8P6uCJIfg2B',
  host: 'epcc-integration.global.ssl.fastly.net',
})

function App() {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    EPCC.ShopperCatalog.Products.All().then((resp) => setProducts(resp.data));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
        {products?.map((product, index) => (
          <li key={index}>{product.attributes.name}</li>
        ))}
      </ul>
      </header>
    </div>
  );
}

export default App;
