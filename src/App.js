import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ProductsPurchasePage } from "./components/pages/ProductsPurchasePage";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ProductsPurchasePage />
    </Provider>
  );
}

export default App;
