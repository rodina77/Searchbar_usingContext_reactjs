import './App.css';
import Product from './components/product';
import TextControlsExample from './components/searchbar'
import SearchProvider from './context/productprovider';
function App() {
  return (
    <SearchProvider>
    <div className="App">
      <header className="App-header">
        <TextControlsExample></TextControlsExample>
        <Product></Product>
      </header>
    </div>
    </SearchProvider>
  );
}

export default App;
