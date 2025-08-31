import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./component/shared/Layout";
import Dashboard from "./component/pages/dashboard/Dashboard";
import Product from "./component/pages/product/Product";
import Login from "./component/Login";
import Order from "./component/pages/order/Order";
import Customers from "./component/Customers";
import Transactions from "./component/pages/transaction/Transactions";
import Settings from "./component/Settings";
import Support from "./component/Support";
// import Support1 from "./component/Support1";
import Message from "./component/pages/message/Message";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="product" element={<Product />} />
          <Route path="order" element={<Order />} />
          <Route path="customers" element={<Customers />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="message" element={<Message />} />
          <Route path="settings" element={<Settings />} />
          <Route path="support" element={<Support />} />
          {/* <Route path="support1" element={<Support1 />} /> */}
          {/* <Route path="/product/:id" element={<ProductView/>} /> */}
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
